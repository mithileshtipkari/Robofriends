import React from 'react';
import Card from './Card'

const CardComponent = ({robots}) =>{
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

export default CardComponent;