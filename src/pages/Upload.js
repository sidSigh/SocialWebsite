import React, { Component } from "react";
import ImagePreview from "../components/ImagePreview";

import { Link } from "react-router-dom";
export default class Upload extends Component {
  render() {
    return (<div className="upld">
               <form>
  <label>
    Event Name:&nbsp;
    <input type="text" name="name" />
  </label><br/>
  <label>
    Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="location" />
  </label><br/>
   <label>
    Details: &nbsp;
    <input className="detls" type="text" name="location" />
  </label><br/>
    <label>
  Add Image (Add an image which best describes your event):  <br/>
  <br/>
               <ImagePreview/>
                     </label><br/>
  <input type="submit" value="Submit Event" name="details" />
</form>      
      </div>
    );
  }
}