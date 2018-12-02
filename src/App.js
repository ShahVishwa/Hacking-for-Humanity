import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import DefaultNavbar from "./components/navbars/DefaultNavbar";
import EmployerNavbar from "./components/navbars/EmployerNavbar";

import Login from "./views/Login";
import Signup from "./views/signup";
import EmployerSignup from "./views/signup/Employer";
import JobsSeekerSignup from "./views/signup/Jobseeker";

import Home from "./views/Home";
import JobSeekerProfile from "./views/JobSeekerProfile";
import JobSeekerSearch from "./views/JobSeekerProfile";
import JobSeekerHome from "./views/JobSeekerHome";
import EmployerHome from "./views/EmployerHome";
import Listing from "./views/Listing";

import Menu from "./components/menus";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    margin: "20px"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "GUEST",
      menuIsOpen: false
    };

    this.setUserType = this.setUserType.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  setUserType(userType) {
    this.setState({ userType });
  }
  handleMenu() {
    this.setState(state => {
      return { menuIsOpen: !state.menuIsOpen };
    });
  }

  render() {
    const { classes } = this.props;
    const { userType, menuIsOpen } = this.state;
    return (
      <div>
        <DefaultNavbar
          userType={userType}
          setUserType={this.setUserType}
          handleMenu={this.handleMenu}
        />
        {menuIsOpen && <Menu handleMenu={this.handleMenu} userType={userType} />}
        <div className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} setUserType={this.setUserType} />
            )}
          />
          <Route
            exact
            path="/jobseeker/signup"
            render={props => (
              <JobsSeekerSignup {...props} setUserType={this.setUserType} />
            )}
          />
          <Route
            exact
            path="/jobseeker/home"
            render={props => <JobSeekerHome {...props} />}
          />

          <Route path="/listing/:id" render={props => <Listing {...props} />} />

          <Route path="/jobseekerprofile" component={JobSeekerProfile} />
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
