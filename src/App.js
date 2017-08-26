import React ,{Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './store'
import AppHeader from './views/common/AppHeader.js'
import LeftBar from './views/common/LeftBar.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Home from './pages/Home.js'
import Me from './pages/Me.js'
import Cinema from './pages/Cinema.js'
import Movies from './pages/Movies.js'
import Shop from './pages/Shop.js'
import Card from './pages/Card.js'
import City from './pages/City.js'


import './css/App.css'
export default class App extends Component {
	constructor(){
		super();
		this.state = { 
			headerTitle : '卖座电影',
			flag:false,
			citys:""
		}
	}
	
	render(){
		return(	
			<Router>
				<div class="allpage">
					<AppHeader 	title={this.state.headerTitle} 
								header={this.BarAction.bind(this)}  
								bar={this.hid.bind(this)}  />
										
						<Route  path='/' render = {(location) =>{
							 {/* console.log(location.location.pathname)  */}
							return(
								<LeftBar
								flag={this.state.flag} 
								bar={this.hid.bind(this)}
								pathname={location.location.pathname}
								leftside={this.dataAction.bind(this)} />
							)
						}} />

						<Route  path='/' exact component={Home} />
						<Route  path='/me'  component={Me} />
						<Route  path='/card'  component={Card} />
						<Route  path='/shop'  component={Shop} />
						<Route  path='/movies'  component={Movies} />
						<Route  path='/cinema'  component={Cinema} />
						<Route  path='/city'  component={City} />
				</div>
			</Router>
		)
		
		
	}
	// 侧边栏控制显示、隐藏
	BarAction(){
		this.setState({flag:!this.state.flag})
	}
	// 头部控制显示、隐藏
	hid(){
		this.setState({flag: false})
	}
	// 页面切换，遮罩层消失
	dataAction(headerTitle){
		this.setState({headerTitle})
		this.setState({flag:!this.state.flag})
	}

	
}
