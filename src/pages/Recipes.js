import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import {Events} from "../components/Events";
export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    recipes: Events,
    search: "",
    base_url: "https://www.food2fork.com/api/search?key=8f702061c136c6b807c00e37b58731bb"
  ,
    url: "https://www.food2fork.com/api/search?key=8f702061c136c6b807c00e37b58731bb"
    ,
    query: "&q=",
    error: ""
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => {
        this.getRecipes();
        console.log(this.state);
      }
    );
  };
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "sorry but your search did not return any results"
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes,
            error: ""
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="text-orange text-center text-uppercase mt-5">
                    {this.state.error}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
