import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import DefaultNavbar from "./components/navbars/DefaultNavbar";
import EmployerNavbar from "./components/navbars/EmployerNavbar";
import Home from "./views/Home";
import JobSeekerProfile from "./views/JobSeekerProfile";
import Login from "./views/Login";
import Signup from "./views/signup";
import EmployerSignup from "./views/signup/Employer";
import EmployerHome from "./views/EmployerHome";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    margin: "20px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <DefaultNavbar />
        <div className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/jobseekerprofile" component={JobSeekerProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/employer/signup" component={EmployerSignup} />
        </div>
      </div>
    );
  }
}

const EmployerRoutes = ({ classes }) => {
  return (
    <div>
      <EmployerNavbar />
      <div className={classes.container}>
        <Route exact path="/employer/home" component={EmployerHome} />
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
