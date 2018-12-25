import React, { Component } from 'react';

import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import {robots} from '../robots'//{} -> shorthand to import non default variables
import SearchBox from '../components/SearchBox'
import './App.css'
import { Scrollbars } from 'react-custom-scrollbars'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => {
  				return response.json()
  			})
  			.then(json => {
  				this.setState({robots: json})	
  			})
	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return !robots.length ? 
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scrollbars style={{ height: 500 }}>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scrollbars>
			</div>
		);
	}
}

export default App;
