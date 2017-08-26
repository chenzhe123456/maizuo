import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import cityData from '../services/CityServices.js'

import '../css/city.css'
import store from '../store'
var myScroll = null
export default class City extends Component {
    constructor({history}){
        // console.log({history})
        super();
        this.state = {
            citydata : [],
            hotdata : ["北京","上海","广州","深圳"],
            history
        }
    }
    render(){
         let showstyle = {transform:this.state.show?'translateY(0px)':'translateY(70px)'}
        return(
            // <ReactCSSTransitionGroup
			// 	transitionName="example"
			// 	 transitionAppear={true}
			// 	 transitionAppearTimeout={500}
			// 	 transitionEnter={false}
     		// 	 transitionLeave={true}
     		// 	 transitionLeaveTimeout={1000}>

            <div class="page cities" id='citys'>
                <div class="pages">
                    <div class="gps">
                         <h3>GPS定位你所在城市</h3>
                         <p><span>深圳</span></p>
                    </div>
                    <div class="hot">
                        <h3>热门城市</h3>
                        <p>
                        {
                            this.state.hotdata.map((item,index)=>{
                                 return(
                                    <span key={index} onClick={this.cityAction.bind(this,item)} >
                                        {item}
                                    </span>
                                 )
                            })
                           
                        }
                        </p>
                    </div>
                    <div class="font">
                        <h3>按字母排序</h3>
                        <p>
                        {
                            this.state.citydata.map((item,index)=>{
                                 return(
                                    <span key={index} onClick={this.arriveAction.bind(this,index)}>
                                        {item.font}
                                    </span>
                                 )
                            })
                        }
                        </p>
                    </div>
                    <div class="place">
                        {
                           this.state.citydata.map((arr,index)=>{
                               var arrs = arr.city;
                                let showstyles= {display : arrs.length != 0 ? "block" : "none"}
                            return(
                                <div class="icons" key={index}  ref={'k'+index} >
                                    <h3 style={showstyles} >{arr.font}</h3>
                                    <p>
                                       { 
                                           arrs.map((items,i)=>{
                                          return(
                                              <span key={i} onClick={this.cityAction.bind(this,items.name)} >{items.name}</span>
                                              )                                  
                                            })
                                        }
                                    </p>
                                </div>
                                )   
                           })  
                        }
                    </div>   
                </div>
                 <div class="top" style={showstyle} onClick={this.topAction.bind(this)}>
                         <i></i><span class="iconfont">&#xe64e;</span>
                </div>
           </div>
		// </ReactCSSTransitionGroup>	
        )
    }
    //将要创建组件
    componentWillMount(){
        // /请求数据
      cityData.getCityData()
      .then((data)=>{
        this.setState({citydata:data})
      })
    }
    // 回到顶部
    topAction(){
        // console.log(myScroll.y);
       myScroll.scrollTo(0, 0, 1000)//回到顶部
       this.setState({show:false})
    }
    // 字母跳转
    arriveAction(index){
       this.state.citydata.map((item,i)=>{
           if(index == i ){
           myScroll.scrollTo(0,-this.refs['k'+index].offsetTop,1000) 
           }
       }) 
    }
    // 点击城市跳换，首页标题显示该城市，使用store全局
    cityAction(val){
        // console.log(val)
        // 修改全局数据
        store.dispatch({
            type : 'changeCity',
            val : val
        })
        // console.log(store.getState())
        //400毫秒后以动画的形式返回首页
        setTimeout(() => {
            this.state.history.goBack()
        },500)
        

    }


    componentDidMount(){
        
        myScroll = new IScroll('#citys',{
            bounce:false , 
            probeType :3
        })
         myScroll.on('scroll', ()=>{
            //  console.log(myScroll.y)
            myScroll.refresh()
             if(myScroll.y <= -150){
                this.setState({show:true})
                // console.log(this.state.show)
            }else{
                 this.setState({show:false})
            }
         })

    }




}