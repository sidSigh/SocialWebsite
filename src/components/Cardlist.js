import React, {Component} from 'react';
import Card from './Card';
import {Events} from '../components/Events';
class Cardlist extends Component{
	render(){
		const{id,name,image}=this.props;
	return(
		<div>
		{
		Events.map((user,i) =>{
			return(
				<Card key={i} 
				id={Events[i].id} 
				name={Events[i].name} 
				image={Events[i].image}/>);
		})

		} </div>
	
	);}
}

export default Cardlist;