import React, { Component } from 'react';
import './Hello.css'
import 'tachyons';

// class Hello extends Component{
// 	render(){
// 		return (
// 			<div className='f1 tc'>
// 			<h1>Hello world</h1>
// 			<p>{this.props.grettings} Welcome to react</p>
// 			</div>
// 		);
// 	}
// }

const Hello = (props) => {
	return(
		<div className='f3 tc'>
			<h1>Hello world</h1>
			<p>{props.grettings} Welcome to react</p>
		</div>
	);
}
export default Hello