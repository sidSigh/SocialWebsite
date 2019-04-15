import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";
import "../App.css";

// import "./App.css";
export default class Recipie extends Component {
  render() {
    const {
      image,
      name,
      id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image}
            style={{ height: "14rem" }}
            className="img-card-top"
            alt=""
          />
          <div className="card-body text-capitalize">
            <h6>{name}</h6>
           
          </div>
          <div className="card-footer">
            <Link
              to={`/recipes/${id}`}
              className="btn btn-primary text-capitalize"
            >
              More Info
            </Link>
           
                       <RatingStar/>
          </div>
        </div>
      </div>
    );
  }
}
