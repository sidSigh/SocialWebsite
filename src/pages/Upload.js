import React, { Component } from "react";
import ImagePreview from "../components/ImagePreview";

import { Link } from "react-router-dom";
export default class Upload extends Component {


  constructor(props) {
    super(props);
    this.state = {
      location: '',
      details:'',
      name:'',
      url:''
     
    };
  }
  updateLocationValue(evt) {
    this.setState({
      location: evt.target.value
    });
  }
  updateDetailsValue(evt) {
    this.setState({
      details: evt.target.value
    });
  }

  updateNameValue(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  updateImgeValue(evt) {
    this.setState({
      url: evt.target.value
    });
  }

  onSubmitSignIn = () => {
    if(this.state.password!=this.state.confirmpassword){
      alert("password!=confirm password");
      return;
    }
    fetch('http://localhost:5000/upload', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        location: this.state.location,
        details:this.state.details,
        url:this.state.url

      })
    })
      .then(user => {
        alert("success!");
        // console.log(user);
        // if (user.id) {
        //   alert("")
        //   this.props.loadUser(user)
        //   this.props.onRouteChange('home');
        // }
      })
  }
  render() {
    return (<div className="upld">
               <form>
  <label>
    Event Name:&nbsp;
    <input type="text" name="name" value={this.state.name} onChange={evt => this.updateNameValue(evt)} />
  </label><br/>
  <label>
    Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="location" value={this.state.location} onChange={evt => this.updateLocationValue(evt)} />
  </label><br/>
   <label>
    Details: &nbsp;
    <input className="detls" type="text" name="details" value={this.state.details} onChange={evt => this.updateDetailsValue(evt)} />
  </label><br/>
  <label>
    Image url: &nbsp;
    <input  type="text" name="img" value={this.state.url} onChange={evt => this.updateImgeValue(evt)} />
  </label><br/>
    <label>
  Add Image (Add an image which best describes your event):  <br/>
  <br/>
               <ImagePreview/>
                     </label><br/>
  <input onClick={this.onSubmitSignIn} type="button" value="Submit Event" />
</form>      
      </div>
    );
  }
}