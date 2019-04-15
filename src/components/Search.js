import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize text-orange">
              search Events              
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                search events using tags
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    disabled={search ? false : true}
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
