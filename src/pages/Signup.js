import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FaKey } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';



export default class Signup extends Component {
  render() {
    return (
      <div className="sbd">
      <div className="crd tc">
               <form className="crd1">
 
  <label>
  <FaUser/> &nbsp;

    <input type="text" name="username" placeholder="Full-Name"/>
  </label><br/>
  <label>
  <FaEnvelope/> &nbsp;
  <input type="e-mail" name="email" placeholder="e-mail" />
  </label><br/>
  <label>
  <FaKey/> &nbsp;
  <input type="password" name="password" placeholder="Password" />
  </label><br/>
    
 <label>
  <FaKey/> &nbsp;
  <input type="e-mail" name="password" placeholder="Reenter Password" />
  </label><br/>
    


  <input type="submit" value="Login" /><br/>
  <Link to="/login"> Already a user? Login</Link>

</form>      
      </div>
      </div>
    );
  }
}