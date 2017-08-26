import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'

import moviesData from '../services/MoviesServices.js'

import '../css/movies.css'

let myScroll = null;
var i = 1;
var j = 1;
var timer = null
export default class Movies extends Component {
    constructor(){
        super();
        this.state = {
            msg:'数据加载中 . . .',
            moviesdata : [] ,
            willdata : [] ,
            display:true,
            shows:false,
            show:false
        }
    }
    render(){
        let activeStyle={
            height:"43px",
            color: 'orange',
            borderBottom:'2px solid orange'
            }
        let shows1 = this.state.display ? activeStyle:null
        let shows2 = this.state.shows? activeStyle:null
        let shows3 = this.state.display?{display:'block'}:{display:'none'}
        let shows4 = this.state.display?{display:'none'}:{display:'block'}
        let showstyle = {transform:this.state.show?'translateY(0px)':'translateY(70px)'}      
        return(
            <div class="page movies" id="movies" ref='movies'>
                <div class="pages face">
                <nav class="nav">
                    <span onClick={this.displaydata.bind(this)} style={shows1} >正在热映</span>
                    <span onClick={this.showdata.bind(this)} style={shows2}>即将上映</span>
                </nav>
                <div class="list">
                    <div class="hot" style={shows3}>
                        {
                            this.state.moviesdata.map((item,index)=>{
                               return(
                                    <Link to="Movies" key={index} >
                                    <div class="img">
                                        <img src={item.cover.origin} />
                                    </div>    
                                    <div class="tip">
                                        <h3>{item.name}</h3>
                                        <span>{item.intro}</span>
                                        <p><strong><i>{item.cinemaCount}</i>家影院上映</strong><b><i>{item.watchCount}</i>人购票</b></p>
                                        <div class="num">
                                            {item.grade}
                                            <em>›</em>
                                        </div>
                                    </div> 
                                    </Link>
                               ) 
                            })
                        }
                    </div> 
                    <div class="will" style={shows4}>
                        {
                            this.state.willdata.map((item,index)=>{
                              return(
                                    <Link to="/Movies" key={index} >
                                        <div class="img">
                                            <img src={item.cover.origin} />
                                        </div>    
                                        <div class="tip">
                                            <h3>{item.name}</h3>
                                            <span>{item.intro}</span>
                                            <p><strong>{item.mm}月{item.dd}日上映</strong><b>{item.ww}</b></p>
                                            <div class="num">                                        
                                            ›
                                            </div>
                                        </div> 
                                    </Link>
                               )   
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

    displaydata(){
            this.setState({display:true})
             this.setState({shows:false})
        }
    showdata(){
            this.setState({display:false})
             this.setState({shows:true})
    }

    componentWillMount(){
        moviesData.getMoviesData(i)
        .then((data)=>{
            console.log(data)
            this.setState({moviesdata:this.state.moviesdata.concat(data)})
            //  console.log(this.state.moviesdata)
        })
        moviesData.getWillData(j)
        .then((data)=>{
            this.setState({willdata:this.state.willdata.concat(data)})
        })
    }
      topAction(){
         myScroll.scrollTo(0, 0, 1000)
        this.setState({show:false}) 
    }
    componentDidMount(){
       
        //下拉加载更多
       myScroll = new IScroll(this.refs.movies,{
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
        
        // console.log(myScroll.maxScrollY )
        myScroll.on('scrollStart', ()=>{
            myScroll.refresh()
            if(myScroll.y - 100 <=  myScroll.maxScrollY && i <= 8 ){                           
                      i++;                     
                     moviesData.getMoviesData(i).then((data)=>{                
                     this.setState({moviesdata:this.state.moviesdata.concat(data)})
                 }) 
        
                 this.setState({msg:'加载更多数据'})
            }else if( i > 8 ){
                this.setState({msg:'加载数据完毕'})
            }
            if(myScroll.y - 100 <= myScroll.maxScrollY && j <= 15 ){
                j++; 
                moviesData.getWillData(j).then((data)=>{
            // console.log(data)
            this.setState({willdata:this.state.willdata.concat(data)})
        })
                this.setState({msg:'加载更多数据'})
            }else if( j > 15 ){
                this.setState({msg:'加载数据完毕'})
            }
        })

    }

}














    

// clearTimeout(timer)
//                  timer = setTimeout(function() {
//                       i++;
//                       console.log(i)
//                      moviesData.getMoviesData(i).then((data)=>{                
//                      this.setState({moviesdata:this.state.moviesdata.concat(data)})
//                  }) 
//              },1000)