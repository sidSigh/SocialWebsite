import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FaKey } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';



export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      username:'',
      confirmpassword:''
    };
    if(sessionStorage.getItem("email")!=null){
      window.location.href = "http://localhost:3000/profile";

    }
  }
  updateEmailValue(evt) {
    this.setState({
      email: evt.target.value
    });
  }
  updatePasswordValue(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  updateConfirmPasswordValue(evt) {
    this.setState({
      confirmpassword: evt.target.value
    });
  }
  updateUserNameValue(evt) {
    this.setState({
      username: evt.target.value
    });
  }


  onSubmitSignIn = () => {
    if(this.state.password!=this.state.confirmpassword){
      alert("password!=confirm password");
      return;
    }
    fetch('http://localhost:5000/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username:this.state.username,

      })
    })
    .then((response)=>{
        sessionStorage.email = this.state.email;
        console.log(response.body)
        window.location.href = "http://localhost:3000/profile";

   
    
    })
  }


  render() {
    return (
      <div className="sbd">
      <div className="crd tc">
               <form className="crd1">
 
  <label>
  <FaUser/> &nbsp;

    <input type="text" name="username" placeholder="Full-Name"value={this.state.username} onChange={evt => this.updateUserNameValue(evt)}/>
  </label><br/>
  <label>
  <FaEnvelope/> &nbsp;
  <input type="e-mail" name="email" placeholder="e-mail" value={this.state.email} onChange={evt => this.updateEmailValue(evt)}/>
  </label><br/>
  <label>
  <FaKey/> &nbsp;
  <input type="password" name="password" placeholder="Password"value={this.state.password} onChange={evt => this.updatePasswordValue(evt)} />
  </label><br/>
    
 <label>
  <FaKey/> &nbsp;
  <input type="password" name="password" placeholder="Reenter Password"value={this.state.confirmpassword} onChange={evt => this.updateConfirmPasswordValue(evt)} />
  </label><br/>
    


  <input type="button" onClick={this.onSubmitSignIn}  value="Signup" /><br/>
  <Link to="/login"> Already a user? Login</Link>

</form>      
      </div>
      </div>
    );
  }
}