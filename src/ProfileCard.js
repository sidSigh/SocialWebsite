import React, { Component } from "react";
import Profile from "./pages/Profile";
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';


// import "./Profile.css";

class ProfileCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: 0,
      icon: <FaUserPlus />,
      text: 'Follow',
      btnStyle: {
        borderRadius: '100%',
        color: 'limegreen',
        cursor: 'pointer',
        decoration:''
        
      }
    }
  }
  
  follow(e){
    e.preventDefault()
    let currentIcon = this.state.icon
    let currentText = this.state.text
    let currentFriends = this.state.friends
    if (currentText === 'Follow')
      this.setState({friends: currentFriends + 1, icon: <FaUserTimes />, text: 'Unfollow', btnStyle: {
        color: 'white', cursor: 'normal'
      }})
    else
      this.setState({friends: currentFriends - 1, icon:<FaUserPlus / >, text: 'Follow', btnStyle: {
        color: 'limegreen', cursor: 'pointer'
      }})
  }
  
  render(){
    return (
      <Profile 
        btnStyle={this.state.btnStyle}
        icon={this.state.icon}
        text={this.state.text}
        follow={this.follow.bind(this)}
        friends={this.state.friends}
      />
    )
  }
}
export default ProfileCard;