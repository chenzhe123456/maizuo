import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import menu from '../../services/AppLeftBar.js'

export default class LeftBar extends Component {
	render(){
		let cover = {
			display:this.props.flag?'block' : 'none',
			background:this.props.flag?'rgba(0,0,0,0.5)':'rgba(0,0,0,0)'

		}
		let leftbar = {
			transform:this.props.flag?"translateX(0)" : "translateX(-100%)"

		}
		let data = this.props.pathname === '/shop'?menu.shopList : menu.appList
		return(
			<div>
				<div class="cover"   style={cover} onClick={this.hid.bind(this)} ></div>
				<div class ="leftbar" style={leftbar} >
					{data.map((item,index)=>{
							return <Link key={index} to={item.path} onClick={this.barAction.bind(this,item)} >{item.tilte} <span class="iconfont">&#xe64b;</span></Link>
					})
					}
				</div>
			</div>
		)
			
	}

	hid(){
		this.props.bar()
	}
	barAction(item){
		this.props.leftside(item.header)
	}




			
}



