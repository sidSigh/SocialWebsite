import React from 'react';
// import {Events} from '../components/Events';
import { FaInfo } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = (props) => {
	const {name, image, id,rem}=props;
return	(<div className="Profilecard shadow-2">
		<img  className="Profileimage" alt='Sid' src={`${image}`} width="250" height="250" />
	
		<h3>{name}</h3>
		<div className="btn">
		{/* <a className='btn btn-warning mx-2 text-capitalize' >View Details &nbsp;<FaInfo /></a>  */}
		<button onClick={rem} className="btn btn-info mx-2 text-capitalize">Remove &nbsp;<FaTimes /></button> 
		</div>

		 			</div>
		);
}


export default Card;
