import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FaKey } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


export default class lgn extends Component {
  render() {
    return (<div className="sbd">
      <div className="crd tc ">
               <form className="crd1">
 
  <label>
    <FaEnvelope/> &nbsp;

    <input type="e-mail" name="e-mail" placeholder="e-mail"/>
  </label><br/>
  <label>
   
<FaKey/> &nbsp;
    <input type="password" name="password" placeholder="password"/>
  </label><br/>
    


  <input type="submit" value="Login" />
  <br/>
  <Link to="/Signup">Signup</Link>

</form>      
      </div>
      </div>
    );
  }
}