import React, {Component} from 'react';
import Card from './Card';
// import {Events} from '../components/Events';
// const Events=[{"id":1,"name":"Infox","location":"ggsipu","details":"techfest of usict","joined":"2019-04-16T20:54:50.289Z"},{"id":2,"name":"Infox","location":"ggsipu","details":"techfest of usict","joined":"2019-04-16T20:56:50.286Z"}];


class Cardlist extends Component{

		state = {
		  Events:[],
		};
		componentDidMount = () => {
			fetch('http://localhost:5000/checkinevents', {
			   method: 'GET'
			})
			.then((response) => response.json())
			.then((responseJson) => {
			   console.log(responseJson);
			   this.setState({
				Events: responseJson,
			
			   })
			})
			.catch((error) => {
			   console.error(error);
			});
		 }
	
	


	render(){
		const{id,name,image}=this.props;
	return(
		<div>
		{
		this.state.Events.map((user,i) =>{
			this.setState.pd=this.state.Events[i].postid
			return(
				<Card key={i} 
				
				id={this.state.Events[i].postid} 
				name={this.state.Events[i].postname} 
				 image={this.state.Events[i].postimage}
				 rem={()=>{
					 alert(this.state.Events[i].postid)
					 fetch('http://localhost:5000/removeevent', {
						method: 'post',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
						  id: this.state.Events[i].postid
	 
	 
						})
					 })
						.then(msg => {
						  alert("success!");
						})
				 }}
				/>);
		})

		} </div>
	
	);}
}

export default Cardlist;