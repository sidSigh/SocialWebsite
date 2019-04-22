import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FaKey } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


export default class lgn extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
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


  onSubmitSignIn = () => {
  //  / sessionStorage.email = "SessionData";
    console.log(sessionStorage.getItem("email"))
    fetch('http://localhost:5000/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response)=>{
      response.json().then(body =>{
        
        
        console.log(body.length);
      
        if(body.length!=0){
          sessionStorage.email = this.state.email;
          console.log(response.body)
          window.location.href = "http://localhost:3000/profile";
        }
        else{
          alert("invalid details!");
        }
      
      
      });

     
     
      

    
    
    })
   
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    return (<div className="sbd">
      <div className="crd tc ">
               <form className="crd1">
 
  <label>
    <FaEnvelope/> &nbsp;

    <input type="e-mail" name="e-mail" placeholder="e-mail"value={this.state.email} onChange={evt => this.updateEmailValue(evt)}/>
  </label><br/>
  <label>
   
<FaKey/> &nbsp;
    <input type="password" name="password" placeholder="password"value={this.state.password} onChange={evt => this.updatePasswordValue(evt)}/>
  </label><br/>
    


  <input type="button"  onClick={this.onSubmitSignIn}  value="Login" />
  <br/>
  <Link to="/Signup">Signup</Link>

</form>      
      </div>
      </div>
    );
  }
}