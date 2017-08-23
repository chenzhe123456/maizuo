import React,{Component} from 'react'

import shopData from '../services/ShopServices.js'
import '../../static/swiper-3.4.2.min.js';

import '../css/shop.css';
import '../../static/swiper-3.4.2.min.css';

var mySwiper = null
export default class Shop extends Component {
    constructor(){
        super();
        this.state = {
            shopdata : [],
            arr1 : [],
            arr2 : [],
            arr3 : [],
            arr4 : [],
            shopgoods : []
        }
    }
    render(){
        return(
             <div class="page shop" id="shop">
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
                                return(
                                    <div class="self" key={index} >
                                        <img src={item.skuList[0].image} />
                                        <h5>{item.masterName}</h5>
                                        <p><span>￥{item.skuList[0].price /100}.00</span><i>已售{item.displaySalesCount}</i></p>
                                    </div>
                                )                                
                            })
                        }
                    </div>
                </div>




            </div> 
        )
    }

componentWillMount(){
    shopData.getShopData()
    .then((data)=>{
        this.setState({shopdata : data})
        this.setState({arr1 : this.state.shopdata[0]})
        this.setState({arr2 : this.state.shopdata[1]})
        this.setState({arr3 : this.state.shopdata[2]})
        this.setState({arr4 : this.state.shopdata[3]})
        // console.log(this.state.arr4)
        mySwiper.update();
    })
    shopData.getShopGoods()
    .then((data)=>{
        this.setState({shopgoods:data})
        console.log(this.state.shopgoods)
    })
}

componentDidMount(){
      mySwiper = new Swiper ('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination'
  })        
}




}




