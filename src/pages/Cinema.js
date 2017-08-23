import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'

import cinemaData from '../services/CinemaServices.js'

import '../css/cinema.css'

export default class Cinema extends Component {
    constructor(){
        super();
        this.state = {
            cinemadata : []   
        }
    }
    render(){     
        return(
             <div class="page cinema" >
                  <div class="list">
                        {
                       this.state.cinemadata.map((arr,index) => {
                             return(
                                    <div class="films" key={index}>
                                        <span >{arr.name}{arr.list.length}</span>
                                         {  
                                             arr.list.map((item,index) => {
                                                return(
                                                    <div class="section" key={index} >
                                                        <div class="add">
                                                            <div class="c-left">
                                                                <div class="tid"><h3>{item.name}</h3><strong>座</strong><b>通</b></div>
                                                                <div class="ress">{item.address}</div>
                                                                    <i>距离未知</i>
                                                                </div>
                                                                <div class="arrow">
                                                                    〉
                                                                </div>
                                                        </div>
                                                    </div>  
                                                )
                                            }) 
                                        } 
                                        
                                    </div>                                                          
                                )
                         })                               
                    }   
                </div>
            </div>
        )
    }

                         
                          
                     
                    




componentWillMount(){
    cinemaData.getCinemaData().
    then((data)=>{
        this.setState({cinemadata:data})
        console.log(data)   
    })
}



}