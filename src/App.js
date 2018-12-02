import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./App.css";

import DefaultNavbar from "./components/navbars/DefaultNavbar";
import Menu from "./components/menus";

import Login from "./views/Login";
import Signup from "./views/signup";

import Home from "./views/Home";

import JobsSeekerSignup from "./views/signup/Jobseeker";
import JobSeekerProfile from "./views/JobSeekerProfile";
import JobSeekerHome from "./views/JobSeekerHome";
import JobSeekerRequest from "./views/JobSeekerRequest";

import EmployerSignup from "./views/signup/Employer";
import EmployerHome from "./views/EmployerHome";
import EmployerCandidates from "./views/EmployerCandidates";

import Listing from "./views/Listing";
import EditListing from "./views/EditListing";
import AddListing from "./views/AddListing";

import Candidate from "./views/Candidate";

import listingsData from "./data/listings";
import candidatesData from "./data/candidates";

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
      isAuthenticated: false,
      menuIsOpen: false,
      // listings: listingsData,
      listings: [],
      candidates: candidatesData
    };

    this.setUserType = this.setUserType.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleUserAuth = this.handleUserAuth.bind(this);
    this.addNewListing = this.addNewListing.bind(this);
    this.updateListing = this.updateListing.bind(this);
  }

  setUserType(userType) {
    this.setState({ userType });
  }
  handleMenu() {
    this.setState(state => {
      return { menuIsOpen: !state.menuIsOpen };
    });
  }
  handleUserAuth() {
    this.setState(state => {
      return { isAuthenticated: !state.isAuthenticated };
    });
  }

  addNewListing(listing) {
    this.setState({ listings: this.state.listings.concat([listing]) });
    NotificationManager.info("New listing added!");
    this.props.history.push("/employer/home");
  }

  updateListing(listing) {
    const listings = this.state.listings.slice();
    listings.splice(
      listings.findIndex(element => element.id === listing.id),
      1,
      listing
    );
    this.setState({ listings });
    NotificationManager.info("Listing successfully updated!");
    this.props.history.push("/employer/home");
  }

  render() {
    const { classes } = this.props;
    const {
      userType,
      menuIsOpen,
      isAuthenticated,
      listings,
      candidates
    } = this.state;
    return (
      <div>
        <NotificationContainer />
        <DefaultNavbar
          userType={userType}
          setUserType={this.setUserType}
          handleMenu={this.handleMenu}
          isAuthenticated={isAuthenticated}
        />
        {menuIsOpen && (
          <Menu handleMenu={this.handleMenu} userType={userType} />
        )}
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
            render={props => <JobSeekerHome listings={listings} {...props} />}
          />
          <Route
            path="/jobseeker/profile"
            render={props => <JobSeekerProfile {...props} />}
          />
          <Route
            path="/jobseeker/requests"
            render={props => <JobSeekerRequest {...props} />}
          />

          <Route
            exact
            path="/employer/signup"
            render={props => (
              <EmployerSignup {...props} setUserType={this.setUserType} />
            )}
          />
          <Route
            exact
            path="/employer/home"
            render={props => <EmployerHome listings={listings} {...props} />}
          />
          <Route
            exact
            path="/employer/candidates"
            render={props => (
              <EmployerCandidates {...props} candidates={candidates} />
            )}
          />

          <Route
            exact
            path="/listing/:id"
            render={props => <Listing listings={listings} {...props} />}
          />
          <Route
            exact
            path="/employer/listing/edit/:id"
            render={props => (
              <EditListing
                listings={listings}
                updateListing={this.updateListing}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/employer/add-listing"
            render={props => (
              <AddListing {...props} addNewListing={this.addNewListing} />
            )}
          />

          <Route
            exact
            path="/candidate/:id"
            render={props => <Candidate candidates={candidates} {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(App));
