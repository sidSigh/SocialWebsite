import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCheckCircle } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa';
import "../App.css";
// import { Link } from "react-router-dom";

// import "./App.css";



const SingEvnt = (props) => {
   
    const {name, image, id,details,fn}=props;
    // Gid=id;
    // console.log(Gid);
return	(<div><Link className="nav-link" to="/Events"><a className="btn btn-warning"><FaBackward/> &nbsp;Back to Events</a></Link>
<div className="sng shadow-2">
<img  className="Profileimage" alt='Sid' src={`${image}`} width="500" height="500" />
	<div className="flt">
		<h3>{name}</h3>
        <h4>{details}</h4>
		<div className="btn">
		{/* <a className='btn btn-warning mx-2 text-capitalize' >View more &nbsp;<FontAwesomeIcon icon="info" /></a>  */}
		<button onClick={fn} className="btn btn-info mx-2 text-capitalize">Check-In &nbsp;<FaCheckCircle /></button> 
		</div></div>

		 			</div></div>
		);
}


export default SingEvnt;
