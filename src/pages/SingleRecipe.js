import React, { Component } from "react";
import { recipeData } from "../tempDetails";
import { Link } from "react-router-dom";
import SingEvnt from '../components/SingEvnt';
export default class SingleRecipe extends Component {
  state = {
    Events: [],
    Gid: '',
    fun:''

  };


  componentDidMount = () => {
    const { pid } = this.props.match.params;
    this.state.Gid = pid;

    console.log({ pid });

    const data = { pid: { pid }.pid };

    console.log(data);

    fetch('http://localhost:5000/single', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          Events: responseJson,
          fun: () => {
            alert('Event Added');

            fetch('http://localhost:5000/checkin', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: responseJson[0].id,
                name:responseJson[0].name,
                image:responseJson[0].image,
                details:responseJson[0].details


              })
            })
              .then(msg => {
                alert("success!");
              })
          }

        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const { id, name, image } = this.props;

    // console.log(id + '----')

    if (this.state.loading) {
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 ">
              <h2 className="text-uppercase text-orange text-center">
                loading Event....
              </h2>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {
          this.state.Events.map((user, i) => {
            return (
              <SingEvnt key={i}

                id={this.state.Events[i].id}
                name={this.state.Events[i].name}
                image={this.state.Events[i].image}
                details={this.state.Events[i].details}
                fn={this.state.fun}

          />);
          })

        } </div>

    );
  }
}

