import React, { Component } from "react";
import Events from "./Events";
import Recipe from './Recipe';
export default class RecipeList extends Component {

  state = {
    Events:[]
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




render(){
  const{id,name,image}=this.props;
return(
  <div>
  {
  this.state.Events.map((user,i) =>{
    return(
      <Recipe key={i} 
      
      id={this.state.Events[i].id} 
      name={this.state.Events[i].name} 
       image={this.state.Events[i].image}
      />);
  })

  } </div>

);}
}