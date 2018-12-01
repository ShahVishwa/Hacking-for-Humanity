import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import JobSeekerSearch from "./views/JobSeekerProfile";
import Signup from "./views/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/jobseekersearch" component={JobSeekerSearch} />

      </div>
    );
  }
}

export default App;
