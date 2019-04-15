import React from 'react';
// import {Events} from '../components/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = (props) => {
	const {name, image, id}=props;
return	(<div className="Profilecard shadow-2">
		<img  className="Profileimage" alt='Sid' src={`${image}`} width="250" height="250" />
	
		<h3>{name}</h3>
		<div className="btn">
		<a className='btn btn-warning mx-2 text-capitalize' >View Profile &nbsp;<FontAwesomeIcon icon="info" /></a> 
		<a className="btn btn-info mx-2 text-capitalize">Remove &nbsp;<FontAwesomeIcon icon="plus" /></a> 
		</div>

		 			</div>
		);
}


export default Card;
