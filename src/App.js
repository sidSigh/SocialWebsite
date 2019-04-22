import React, { Component } from "react";
import Frnd from "./pages/Frnd"
import "./App.css";
import Scroll from './Scroll';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import ProfileCard from "./ProfileCard";
import Upload from "./pages/Upload";
import lgn from "./pages/lgn";
import Signup from "./pages/Signup";
import Edit from "./pages/Edit";
import StickyHeader from 'react-sticky-header';

import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <main>
            <Navbar />
         
          <Scroll>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Profile" exact component={ProfileCard} />
            <Route path="/Upload" exact component={Upload} />
            <Route path="/Events" exact component={Recipes} />
            <Route path="/Checkedin" exact component={Frnd} />
           <Route path="/login" exact component={lgn} />
           <Route path="/edit" exact component={Edit} />
           <Route path="/Signup" exact component={Signup} />
                        <Route path="/Events/:pid" component={SingleRecipe} />
                                    <Route component={Default} />
          </Switch>
          </Scroll>
<div className="footer "><p>CHECK ME IN</p></div>
        </main>
      </Router>
    );
  }
}

export default App;