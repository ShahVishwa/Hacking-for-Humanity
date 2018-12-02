import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BackIcon from "@material-ui/icons/NavigateBefore";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: "auto"
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "white",
    marginRight: 15
  },
  logOutButton: {},
  logInButton: {}
};

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleLogIn() {
    this.props.history.push("/login");
  }
  handleLogOut() {
    this.props.setUserType("GUEST");
    this.props.history.push("/");
  }
  handleGoBack() {
    this.props.history.goBack();
  }

  render() {
    const { classes, handleMenu, location } = this.props;
    const paths = location.pathname.split("/");
    const targetPath = paths[1];

    switch (targetPath) {
      case "jobseeker":
        return (
          <JobSeekerNavBar
            handleLogOut={this.handleLogOut}
            classes={classes}
            handleMenu={handleMenu}
          />
        );
      case "listing":
        return (
          <ListingNavBar
            handleLogOut={this.handleLogOut}
            handleGoBack={this.handleGoBack}
            classes={classes}
          />
        );
      default:
        return (
          <UnauthorizedNavBar
            handleLogIn={this.handleLogIn}
            classes={classes}
            handleMenu={handleMenu}
          />
        );
    }
  }
}

class ListingNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, handleLogOut, handleGoBack } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={handleGoBack}
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <BackIcon />
            </IconButton>
            <Button
              onClick={handleLogOut}
              className={classes.logOutButton}
              color="inherit"
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

class JobSeekerNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, handleLogOut, handleMenu } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={handleMenu}
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={handleLogOut}
              className={classes.logOutButton}
              color="inherit"
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const UnauthorizedNavBar = ({ classes, handleLogIn, handleMenu }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={handleLogIn}
            className={classes.logInButton}
            color="inherit"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

DefaultNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(DefaultNavbar));
