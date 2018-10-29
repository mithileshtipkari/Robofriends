import React from 'react';
import Card from './Card'

const CardComponent = ({robots}) =>{
	const cardsArray = robots.map((element)=>{
		return <Card id={element.id} name={element.name} email={element.email}/>
	});
	return(
		<div>
			{cardsArray}
		</div>
	);
}

export default CardComponent;