import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'

import cinemaData from '../services/CinemaServices.js'

import '../css/cinema.css'
let myScroll = null;
var i = 1;
var j = 1;
export default class Cinema extends Component {
    constructor(){
        super();
        this.state = {
            cinemadata : []  ,
            show:false,
        }
    }
    render(){
          let showstyle = {transform:this.state.show?'translateY(0px)':'translateY(70px)'}
        return(
             <div class="page cinema" ref="cinema">
                 <div class="pages">
                  <div class="list">
                        {
                       this.state.cinemadata.map((arr,index) => {
                            var style = {
                                display: arr.style
                            }           
                             return(                                
                                    <div class="films" key={index}   >
                                        <span onClick={this.cinemaAction.bind(this,index)}>{arr.name}</span>
                                             <div class="section" style={style} >
                                                {  
                                                    arr.list.map((item,index) => {
                                                        return(
                                                            <div class="add" key={index}>
                                                                <div class="c-left">
                                                                    <div class="tid"><h3>{item.name}</h3><strong>座</strong><b>通</b></div>
                                                                    <div class="ress">{item.address}</div>
                                                                        <i>距离未知</i>
                                                                    </div>
                                                                    <div class="arrow">
                                                                        〉
                                                                    </div>
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
                 </div>
                    <div class="top" style={showstyle} onClick={this.topAction.bind(this)} >
                    <i></i><span class="iconfont">&#xe64e;</span>
                 </div> 
             </div>
        )
    }

    cinemaAction(index){
    //  console.log(this.state.cinemadata) 
       var arrt = this.state.cinemadata
         arrt.map((item,i)=>{
            if( index == i ){
                if(item.style == "none"){
                    item.style = 'block'
                }else{
                    item.style = "none"
                }
            }
        })
       this.setState({cinemadata:arrt})
    }
                         
     topAction(){
          myScroll.scrollTo(0, 0, 1000)
        this.setState({show:false}) 
    }                     
                     

componentWillMount(){
    cinemaData.getCinemaData().
    then((data)=>{
        if(window.sessionStorage.getItem('arrt')){
            var arrs = JSON.parse(window.sessionStorage.getItem('arrt')) 
            arrs.map((item,index)=>{
                if(index == 0){
                    item.style = 'block' 
                }
            })
            this.setState({cinemadata:arrs})
        }else{
             var arrs = data
            arrs.map((item,index)=>{
                if(index == 0){
                    item.style = 'block' 
                }
            })
            this.setState({cinemadata:arrs})
        }
    })  
}


componentDidMount(){
    // 滚动事件
     myScroll = new IScroll(this.refs.cinema,{
            bounce: true,
	        probeType: 3
       })

        myScroll.on('scroll', ()=>{     
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