import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Signup from "./views/Signup";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    margin: "40px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Navbar />
        <div className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
