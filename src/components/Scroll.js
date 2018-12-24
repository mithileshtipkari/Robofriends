import React from 'react'

//inline styling object
const scrollBox = {
	overflowY : 'scroll',
	border : '2px solid black',
	height : '400px'
};

const Scroll = (props) =>{
	return(
		<div style={scrollBox}> 
			{props.children}
		</div>
	);
};

export default Scroll;