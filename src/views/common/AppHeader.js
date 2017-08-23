import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class AppHeader extends Component{
	constructor(){
		super();
		this.state = {
			city:'深圳'
		}
	}
	render(){
		return(
			<header class="header"  >
				<span class="menu iconfont" onClick={this.menu.bind(this)}  >&#xe644;</span>
				<div class="cont" onClick={this.bar.bind(this)}>
				<h2>{this.props.title}</h2>
				<Link to='/city' class="city">{this.state.city}<i class="iconfont">&#xe64b;</i></Link>
				<Link to='/me'><span class="me iconfont">&#xe643;</span></Link>
				</div>
			</header>
		)
	}
	
	menu(){
		this.props.header()
	}
	bar(){
		this.props.bar()
	}
	
}























