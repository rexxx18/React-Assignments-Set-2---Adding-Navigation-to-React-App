import React, { Component, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import LocationDisplayComponent from "./locationcomponent";
import "../styles/App.css";

function About() {
  return <div>You are on the about page.</div>;
}
function Home() {
  return <div>You are home.</div>;
}

function Invalid() {
  return <div>No match</div>;
}

class App extends Component {
  render() {
    return (
      <>
        <div id="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            <Route path="/" component={Invalid} />
          </Switch>
          <LocationDisplayComponent />
        </div>
      </>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
