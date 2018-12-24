import React from 'react';
import Card from './Card'

//pure function/ dumb function which just recieves props
//and renders the same view every time, it does not change props
const CardList = ({robots}) =>{
	//to demnstrate error handling using ErrorBoundry
	// if (true){
	// 	throw new Error('new error');
	// }
	return(
		<div>
			{
				robots.map((element)=>{
					return( 
						<Card
							key={element.id} 
							id={element.id} 
							name={element.name} 
							email={element.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;