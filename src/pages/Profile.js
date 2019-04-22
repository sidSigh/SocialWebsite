import React, { Component } from "react";
import Header from "../components/Header";
import FriendList from '../components/FriendList';
import {Events} from '../components/Events';
// import Searchbox from '../components/Searchbox';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import Scroll from '../Scroll';
// import { Link } from "react-router-dom";
import { FaThumbtack } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

library.add(faSearch)
library.add(faInfo)

const Profile = (props) => {

  return (
     <div className='ProfilePage'>
     <div className="frnd">
     <h3 className="text-capitalize tc shadow-2 frnd1 "><Link className="nav-link" to="/Profile">
     <FaUser/>              my profile
            </Link>  </h3>
     <h3 className="text-capitalize tc shadow-2 frnd1 "><Link className="nav-link" to="/Checkedin">
     <FaCheck/> Checked In Events
            </Link> </h3>   
               
     <h3 className="text-capitalize tc shadow-2 frnd1 "><Link className="nav-link" to="/edit"><FaEdit/> &nbsp;edit profile</Link></h3>      
      <h3 className="text-capitalize tc shadow-2 frnd1 "><button onClick={props.logout}><FaSignOutAlt/> &nbsp;Logout</button></h3>
     </div>            
         <div className="ProfileCard">
        <header className="card-header">
          <div className="hello">
            <img  className="ProfileImage"src="https://ae01.alicdn.com/kf/HTB1jrRQOXXXXXc7XXXXq6xXFXXX9/Dragon-Ball-Z-Poster-Custom-Canvas-Craft-One-Piece-Wallpaper-Comic-Anime-Naruto-Wall-Stickers-Luffy.jpg"  alt="" />
          <div className="heading-box">
            <h1>Welcome User</h1>
            <h4><span> <FaThumbtack/>Check In Now</span></h4>
          </div>
          </div>
         
           <h3> <a className="follow-btn" ><i style={props.btnStyle} onClick={props.follow} >{props.icon}</i></a>
          </h3>
        </header>
        
        <main className="card-main">
          <div>
            <i className="material-icons"></i>
            <span className="activity-name btnfol btn btn-warning btn-sm mt-3 tc">Followers &nbsp; {props.friends}</span>
           
          </div>
                  </main>
      </div>
      <div>
     <Scroll>
     <h3 className="text-uppercase tc shadow-2 frnd1 ">Checked In Events</h3>
      <FriendList />
      </Scroll>
      </div>
           </div>
        )
}
export default Profile;
