import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
            <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
