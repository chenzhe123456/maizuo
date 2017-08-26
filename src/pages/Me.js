import React,{Component} from 'react'
import {Link} from 'react-router-dom';

import '../css/me.css';

export default class Me extends Component {
    render(){
        return(
               <div class="page my" >
                    <div class="form">
                        <div class="name"> 
                            <input type="text" class="number" placeholder="输入手机号/邮箱"/>
                        </div>
                        <div class="pwd">
                            <input type="text" class="psd" placeholder="输入密码/验证码" />
                        </div>
                        <button class="btn">
                            登录
                        </button>
                    </div>
                </div> 
        )
    
    }
}













