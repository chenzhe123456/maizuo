import React,{Component} from 'react'

import shopData from '../services/ShopServices.js'
import '../../static/swiper-3.4.2.min.js';

import '../css/shop.css';
import '../../static/swiper-3.4.2.min.css';

var mySwiper = null;
let myScroll = null;
var i = 1;
export default class Shop extends Component {
    constructor(){
        super();
        this.state = {
            shopdata : [],
            arr1 : [],
            arr2 : [],
            arr3 : [],
            arr4 : [],
            shopgoods : [],
            msg:'数据加载中 . . . '
        }
    }
    render(){
          let showstyle = {transform:this.state.show?'translateY(0px)':'translateY(70px)'}
        return(
             <div class="page shop" id="shop" ref='shop'>
                 <div class="pages" >
                 <div class="swiper-container ban">
                    <div class="swiper-wrapper">
                        {
                            this.state.arr2.map((item,index)=>{
                                return(
                                   <div class="swiper-slide" key={index} ><img src={item.imageSrc} /></div> 
                                )
                            })
                        }
                    </div>
                    <div class="swiper-pagination"></div>
                 </div>
                <nav class="nav">
                    {
                        this.state.arr1.map((item,index)=>{
                            return(
                                <div class="mark" key={index} >
                                <img src={item.imageSrc} />
                                <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </nav>
                <div class="life">
                    {
                       this.state.arr3.map((item,index)=>{
                            return(
                                <div class="live" key={index} >
                                <img src={item.imageSrc} /> 
                                </div>
                            )
                        })
                    }
                </div>
                <div class="main">
                    {
                        this.state.arr4.map((item,index)=>{
                            return(
                                <div class="stat" key={index}>
                                    <img src={item.imageSrc} class='img'/>
                                    <div class="icon">
                                        {
                                            item.products.map((items,index)=>{
                                                    return(
                                                        <div class="per" key={index} >
                                                            <img src={items.image} />
                                                            <p>{items.name}</p>
                                                            <span>￥{items.price / 100}.00</span>
                                                        </div>
                                                    )
                                            })
                                        }
                                      
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div class="goods">
                    <div class="title">
                        -&nbsp好货精选&nbsp-
                    </div>
                    <div class="cargo">
                        {
                            this.state.shopgoods.map((item,index)=>{
                                {/* return(
                                    <div class="self" key={index} >
                                        <img src={item.skuList[0].image} />
                                        <h5>{item.masterName}</h5>
                                        <p><span>￥{item.skuList[0].price /100}.00</span><i>已售{item.displaySalesCount}</i></p>
                                    </div>
                                )                                 */}
                            })
                        }
                    </div>
                </div>
                <div class="load">
                   <span> {this.state.msg} </span>
                </div>
            </div>
            <div class="top" style={showstyle} onClick={this.topAction.bind(this)} >
                    <i></i><span class="iconfont">&#xe64e;</span>
            </div>
        </div> 
        )
    }
    topAction(){
            myScroll.scrollTo(0, 0, 1000)
            this.setState({show:false}) 
    }
componentWillMount(){
    shopData.getShopData()
    .then((data)=>{
        this.setState({shopdata : data})
        this.setState({arr1 : this.state.shopdata[0]})
        this.setState({arr2 : this.state.shopdata[1]})
        this.setState({arr3 : this.state.shopdata[2]})
        this.setState({arr4 : this.state.shopdata[3]})
        mySwiper.update();
    })
    shopData.getShopGoods(i)
    .then((data)=>{
        this.setState({shopgoods:this.state.shopdata.concat(data)})
    })
}

componentDidMount(){
    mySwiper = new Swiper ('.swiper-container', {
        // 如果需要分页器
    pagination: '.swiper-pagination'
  })        

    // 滚动事件
      myScroll = new IScroll(this.refs.shop,{
            bounce: true,
	        probeType: 3
       })

   myScroll.on('scrollStart', ()=>{
        myScroll.refresh()
        //  控制回到顶部的按钮
         if(myScroll.y <= -150){
                this.setState({show:true})
            }else{
                 this.setState({show:false})
            }
        // 滚动加载更多：
        // console.log(myScroll.maxScrollY)
        if(myScroll.y - 100 <=  myScroll.maxScrollY && i <= 17){
            i++
            shopData.getShopGoods(i).then((data)=>{
                // console.log(i)
                this.setState({shopgoods : this.state.shopdata.concat(data)})                                  
                // console.log(this.state.shopgoods)
            })
            this.setState({msg:'加载更多数据'})
        }else if(i > 17){
            this.setState({msg:'加载数据完毕'})
        } 
    })
    
    









    
}   



}
