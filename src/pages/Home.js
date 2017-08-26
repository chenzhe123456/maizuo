import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import homeData from  '../services/HomeServices.js';


import '../css/home.css';



var mySwiper = null;
let myScroll = null;

export default class Home extends Component {
        constructor(){
            super();
            this.state = {
                msg:'数据加载中 . . .',
                bannerData : [],
                nowData : [],
                willData : [],
                show:false
            }
        }

    render(){
         let showstyle = {transform:this.state.show?'translateY(0px)':'translateY(70px)'}
        return(
             <div class="page home" id="homes" ref='home'>
                <div class="pages">
                 {/*banner轮播图  */}
                 <div ref="banner" class="swiper-container banner">
                    <div class="swiper-wrapper">
                        {
                            this.state.bannerData.map((item,index)=>{
                                return(
                                      <Link key={index} to="/" class="swiper-slide" ><img src={item.imageUrl}/></Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/*正在热播影片  */}
                <div class="hot">
                    {
                        this.state.nowData.map((item,index)=>{
                            return(
                                <Link key={index} to="">
                                    <img src={item.cover.origin} />
                                    <div class="tip">
                                        <span>{item.name}</span>
                                        <p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
                                        <strong>{item.grade}</strong>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <p><Link to='/Movies' class="more">更多热映电影</Link></p>
                    <b>即将上映</b>
                </div>
                    {/*即将上映  */}
                <div class="will">
                    {
                        this.state.willData.map((item,index)=>{
                            return(
                                <Link key={index} to="">
                                    <img src={item.cover.origin} />
                                    <div class="tips">
                                    <span> {item.name}</span>
                                    <strong>8月25日上映 </strong>
                                    </div> 
                                </Link>
                            )
                        })
                    }
                    <Link to="/Movies" class="more">更多即将上映电影</Link>
                </div>
                                     
             </div>
             <div class="top" style={showstyle} onClick={this.topAction.bind(this)}>
                    <i></i><span class="iconfont">&#xe64e;</span>
            </div> 
            </div> 
        )
       
    }

    componentWillMount(){
          // 判断 sessionStorage 有没有 轮播图 的数据，有就直接用，没有就执行 ajax 
        if ( window.sessionStorage.getItem('lunbotu')) {
            var data = JSON.parse(window.sessionStorage.getItem('lunbotu'));
            this.setState({bannerData:data}, function() {
                mySwiper.update();
            });
            
        } else {
            //   请求轮播图数据；
            homeData.getHomeData()
                .then((data)=>{
                //因为需要设置loop，而dom被js绑定了
                // data.splice(0, 0, data[data.length-1])
                // data.push(data[1]);
                // console.log(data)
                this.setState({bannerData:data},function() {
                    mySwiper.update();
                 });
                })
            }

            
            // 现在播放电影的数据：
            homeData.nowPlayingData()
            .then((data)=>{
                this.setState({nowData:data});
            })
            // 即将上映的电影数据：
            homeData.willSoonData()
            .then((data)=>{
                this.setState({willData:data});
            })
        }
    topAction(){

        // console.log(myScroll.y);
       myScroll.scrollTo(0, 0, 1000)
       this.setState({show:false})
    }


    componentDidMount(){
        // console.log(this.state.bannerData)
        mySwiper = new Swiper('.swiper-container',{
        })


        // //下拉加载更多
       myScroll = new IScroll(this.refs.home,{
            bounce: true,
	        probeType: 3
       })

        myScroll.on('scroll', ()=>{
            myScroll.refresh()
            // console.log(myScroll.y)
            // console.log(this.state.show)
            if(myScroll.y <= -150){
                this.setState({show:true})
                // console.log(this.state.show)
            }else{
                 this.setState({show:false})
            }
        })











    }







}