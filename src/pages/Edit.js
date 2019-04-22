import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa';
export default class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username:'',

    };
  }
  updateEmailValue(evt) {
    this.setState({
      email: evt.target.value
    });
  }

 
  updateUserNameValue(evt) {
    this.setState({
      username: evt.target.value
    });
  }


  onSubmitSignIn = () => {
   
    fetch('http://localhost:5000/update', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        username:this.state.username,

      })
    })
      .then(user => {
        alert("success!");
        // console.log(user);
        // if (user.id) {
        //   alert("")
        //   this.props.loadUser(user)
        //   this.props.onRouteChange('home');
        // }
      })
    
  }


  render() {
    return (
        <div><Link className="nav-link" to="/Profile"><a className="btn btn-warning"><FaBackward/> &nbsp;Back to Profile</a></Link>
      <div className="sbd">
      <div className=" tc">
               <form className="crd1">
 <h2>
  <label>
  <FaUser/> &nbsp;

    <input type="text" name="username" placeholder="New Username"value={this.state.username} onChange={evt => this.updateUserNameValue(evt)}/>
  </label><br/>
  <label>
  <FaEnvelope/> &nbsp;
  <input type="e-mail" name="email" placeholder="New E-mail" value={this.state.email} onChange={evt => this.updateEmailValue(evt)}/>
  </label><br/>
 
    


  <input type="button" onClick={this.onSubmitSignIn}  value="Update" /><br/></h2>

</form>      
      </div>
      </div>
      </div>
    );
  }
}