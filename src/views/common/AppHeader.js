import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

import store from '../../store'

export default class AppHeader extends Component{
	constructor(){
		//  console.log(store.getState())
		super();
		this.state = {
			city : store.getState().city
		}
		this.isactive=true
		console.log(this.state.city)
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
	// 监听store上state数据的变化
	componentWillMount(){
		if(this.isactive){
			store.subscribe(() =>{  //监听结构
				this.setState({city:store.getState().city})
			})
		}
		
	}
	menu(){
		this.props.header()
	}
	bar(){
		this.props.bar()
	}
	componentDidMount(){
		this.setState({isactive:false})
	}
	
}























