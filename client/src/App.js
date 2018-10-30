import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const ShowScraped = (props) => {
  return (<div> Scraped stuff 
    <Link to="/scrape">Scrape</Link>
  </div>)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NYT React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
