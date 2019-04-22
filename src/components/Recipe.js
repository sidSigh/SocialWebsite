import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCheckCircle } from 'react-icons/fa';
import "../App.css";

// import "./App.css";
const Recipe = (props) => {
	
	const {name, image, id}=props;
	const url = "/Events/" + id ; 
	console.log(url)
	
	
return	(<div className="Profilecard shadow-2">
		<img  className="Profileimage" alt='Sid' src={`${image}`} width="250" height="250" />

		<h3>{name}</h3>
		<div className="btn">
		<a href={url} className='btn btn-warning mx-2 text-capitalize'> View more &nbsp;<FontAwesomeIcon icon="info" /></a> 
		{/* <a className="btn btn-info mx-2 text-capitalize" href='#' >Check-In &nbsp;<FaCheckCircle /></a>  */}
		</div>

		 			</div>
		);
}


export default Recipe;
