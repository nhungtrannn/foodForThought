import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateFood from "./components/create-food.component";
import EditFood from "./components/edit-food.component";
import FoodList from "./components/food-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
            <img src={logo} width="30" height="30" />
            </a> 
            <Link to="/" className="navbar-brand">Food For Thought</Link>
            <div className="nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Food</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Food</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/1" className="nav-link">Edit Food</Link>
                </li>
              </ul>
            </div>
          </nav>
 
          <Route path="/" exact component={FoodList} />
          <Route path="/edit/:id" component={EditFood} />
          <Route path="/create" component={CreateFood} />
        </div>
      </Router>
    );
  }
}

export default App;
