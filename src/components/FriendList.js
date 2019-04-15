import React, { Component } from "react";
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import {Events} from '../components/Events';
import Scroll from '../Scroll';

class FriendList extends Component{
	constructor(){
		super()
		this.state={
			Events:Events,
			searchfield:''
		}
	}

onSearchChange= (event) =>{
	this.setState({searchfield:event.target.value})
}

render() {
	const filteredEvents= this.state.Events.filter(Events=>{
		return Events.name.toUpperCase().includes(this.state.searchfield.toUpperCase());
	})
	return(
		<div>
		<div className='fnd'>
		<Searchbox className='SB' searchChange={this.onSearchChange}/>
			<div className="container">
		</div>
		<Scroll>
				<Cardlist className="tc" Events= {filteredEvents} />
		</Scroll>
				</div>
				</div>
		);}}
	export default FriendList;
	