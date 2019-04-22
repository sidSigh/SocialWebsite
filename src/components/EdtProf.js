import React from 'react';
// import {Events} from '../components/Events';
import { FaInfo } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EdtPrf = (props) => {
	const {name, email, id}=props;
return	(<div className="Profilecard shadow-2">
	
	
		<h3>{name}</h3>
		<h3>{email}</h3>
        <label>
            <FaUser/> &nbsp;
    <input type="text" name="username" placeholder="New Username"/>
  </label><br/>
  <label>
  <FaEnvelope/> &nbsp;
  <input type="e-mail" name="email" placeholder="New e-mail"/>
  </label><br/>

  <input type="button"  value="Update" /><br/>
	

		 			</div>
		);
}


export default EdtPrf;
