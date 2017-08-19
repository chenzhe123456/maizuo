import React ,{Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AppHeader from './views/common/AppHeader.js'
import LeftBar from './views/common/LeftBar.js'

import Home from './pages/Home.js'
import Me from './pages/Me.js'
import Cinema from './pages/Cinema.js'
import Movies from './pages/Movies.js'
import Shop from './pages/Shop.js'
import Card from './pages/Card.js'


import './css/App.css'
export default class App extends Component {
	constructor(){
		super();
		this.state = { 
			headerTitle : '卖座电影',
			flag:false
		}
	}
	
	render(){

		return(
			<Router>
				<div>
					<AppHeader title={this.state.headerTitle} header={this.BarAction.bind(this)}  bar={this.hid.bind(this)} />
										
						<Route  path='/' render = {(location) =>{
							{/* console.log(location.location.pathname) */}
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
				</div>
			</Router>
		)
		
		
	}

	BarAction(){
		this.setState({flag:!this.state.flag})
	}
	hid(){
		this.setState({flag: false})
	}
	dataAction(headerTitle){
		this.setState({headerTitle})
		this.setState({flag:!this.state.flag})
	}
	
	
}
