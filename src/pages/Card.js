import React,{Component} from 'react'
import {Link} from 'react-router-dom';

import '../css/card.css';

export default class Card extends Component {
    constructor(){
        super();
        this.state = {
            show:true,
            display:false
        }
    }
    render(){
        let active = {
             boxShadow:'0 -4px #ff7100 inset' 
        }
        var show1 = this.state.show ? active : null;
        var show2 = this.state.display ? active : null;
        var show3 ={display:this.state.show ?  "block" : ' none'};
        var show4 ={display:this.state.display ? "block" : ' none'};
        return(
            <div class="page card">
                <div class="care">
                    <ul class="two">
                        <li onClick={this.buyAction.bind(this)} style={show1} >卖座卡</li>
                        <li onClick={this.eleAction.bind(this)} style={show2}>电子卖座卡</li>
                    </ul>
                    <div class="into">
                            <div class="buy"  style={show3} >
                                <div class="name"> 
                                    <span>卡号 :</span>
                                    <input type="text" class="number" placeholder="请输入卡号"/>
                                </div>
                                <div class="pwd">
                                    <span>密码 :</span>
                                    <input type="text" class="psd" placeholder="请输入密码" />
                                </div>
                                <button class="btn">
                                    查询
                                </button>
                        </div>
                        <div class="ele"  style={show4} >
                             <div class="name"> 
                                <span>卡号 :</span>
                                <input type="text" class="number" placeholder="请输入15位电子卖座卡号"/>
                            </div>
                            <button class="btn">
                                查询
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        )
      
    }

    buyAction(){
        this.setState({show : true})
        this.setState({display : false})
    }
    eleAction(){
         this.setState({show : false})
        this.setState({display : true})
    }


}