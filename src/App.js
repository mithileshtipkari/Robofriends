import React, { Component } from 'react';

import CardList from './CardList'
import Scroll from './Scroll'
import {robots} from './robots'//{} -> shorthand to import non default variables
import SearchBox from './SearchBox'
import './App.css'

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
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;
