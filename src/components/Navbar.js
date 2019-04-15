import React from 'react';
import Tilt from 'react-tilt';
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import StickyHeader from 'react-sticky-header'

export default function Navbar() {
  return (
         <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <Link to="/" className="navbar-brand">
         <div className='mb4 mt0 w-15 '>

    <Tilt className="Tilt " options={{ max : 30 }} style={{ height: 20, width: 200}} >
    
    
    <div className='Tilt-inner shadow-5 grow flex'>
    <h3 className='w-70 flex-start mr0 pa10'style={{color:'white'}}>Check Me IN!!</h3> 
      
    
    </div>
    
    </Tilt>
    </div>      </Link>

      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
                  <li className="nav-item active">
            <Link className="nav-link" to="/recipes">
              Events
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Profile">
              Profile
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Upload">
              Add Event
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
// <img className='w-30  dib ml0 pt3' style={{width:'25px', height:'25px' }}  src={logo} alt='logo'/>
