import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';



const Searchbox =({searchfield, searchChange}) => {
	return(
		<div className="  grow center  dib shadow-10">		<input className='tc'
		type= 'search' 
		placeholder='Search Friends'
		onChange= {searchChange}
		/> <i> <Button className="SB1" color="warning"> <FontAwesomeIcon icon="search" /> </Button></i>		</div>
		);
}
export default Searchbox;