import React, { Component } from "react";
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import Scroll from '../Scroll';

class FriendList extends Component {
	// constructor(){
	// 	super()
	// 	this.state={
	// 		Events:Events,
	// 		searchfield:''
	// 	}
	// }

	state = {
		Events: [],

		searchfield: ''
	};
	// componentDidMount = () => {
	// 	fetch('http://localhost:5000/checkinevents', {
	// 		method: 'GET'
	// 	})
	// 		.then((response) => response.json())
	// 		.then((responseJson) => {
	// 			console.log(responseJson);
	// 			this.setState({
	// 				Events: responseJson
	// 			})
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }


	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value })
	// }

	render() {
		// const { Events, searchfield } = this.state;
		// const filteredEvents = Events.filter(Events =>{
		//   return Events.name.toLowerCase().includes(searchfield.toLowerCase());
		// })
		// return !Events.length ?
		//   <h1>Loading</h1> :
		// const filteredEvents = this.state.Events.filter(Events => {
		// 	return Events.name.toUpperCase().includes(this.state.searchfield.toUpperCase());
		// })
		 return (
			
			<div>
				<div className='fnd'>
					<Searchbox className='SB' searchChange={this.onSearchChange} />
					<div className="container">
					</div>
					<Scroll>
						{/* <Cardlist className="tc" Events={filteredEvents} /> */}
						<Cardlist/>
					</Scroll>
				</div>
			</div>
		);
	}
}
export default FriendList;
