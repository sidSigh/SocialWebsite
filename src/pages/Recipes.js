import React, { Component } from "react";
import Searchbox from '../components/Searchbox';
// import Cardlist from '../components/Cardlist';
import Scroll from '../Scroll';
import RecipeList from "../components/RecipeList";



class Recipe extends Component {
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
	componentDidMount = () => {
		fetch('http://localhost:5000/events', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({
					Events: responseJson
				})
			})
			.catch((error) => {
				console.error(error);
			});
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredEvents = this.state.Events.filter(Events => {
			return Events.name.toUpperCase().includes(this.state.searchfield.toUpperCase());
		})
		return (
			<div>
				<div className='fnd'>
					<Searchbox className='SB' searchChange={this.onSearchChange} />
					<div className="container">
					</div>
					<Scroll>
						<RecipeList className="tc" Events={filteredEvents} />
					</Scroll>
				</div>
			</div>
		);
	}
}
export default Recipe;

