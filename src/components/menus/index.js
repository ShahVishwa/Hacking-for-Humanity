import React from "react";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  root: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: 2100,
    backgroundColor: "gray",
    top: 0,
    opacity: 0.6
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "55vw",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 3000
  },
  closeIcon: {
    display: "block",
    marginLeft: "80%",
    fontSize: "24px",
    marginTop: "5px"
  },
  linkItem: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px"
  }
};

class DefaultMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(link) {
    this.props.handleMenu();
    this.props.history.push(link);
  }

  render() {
    const { userType, classes, handleMenu } = this.props;

    switch (userType) {
      case "GUEST":
        return (
          <UnauthorizedMenu
            handleMenuClick={this.handleMenuClick}
            handleMenu={handleMenu}
            classes={classes}
          />
        );
      case "JOBSEEKER":
        return (
          <JobSeekerMenu
            classes={classes}
            handleMenu={handleMenu}
            handleMenuClick={this.handleMenuClick}
          />
        );
      case "EMPLOYER":
        return (
          <EmployerMenu
            classes={classes}
            handleMenu={handleMenu}
            handleMenuClick={this.handleMenuClick}
          />
        );
    }
  }
}
const EmployerMenu = ({ classes, handleMenu, handleMenuClick }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>
        <span onClick={handleMenu} className={classes.closeIcon}>
          &#10006;
        </span>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/home")}
        >
          Home
        </ListItem>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/profile")}
        >
          Profile
        </ListItem>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/requests")}
        >
          Things I Need
        </ListItem>
      </div>
    </div>
  );
};

const JobSeekerMenu = ({ classes, handleMenu, handleMenuClick }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>
        <span onClick={handleMenu} className={classes.closeIcon}>
          &#10006;
        </span>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/home")}
        >
          Home
        </ListItem>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/profile")}
        >
          Profile
        </ListItem>
        <ListItem
          button
          onClick={handleMenuClick.bind(null, "/jobseeker/requests")}
        >
          Things I Need
        </ListItem>
      </div>
    </div>
  );
};

const UnauthorizedMenu = ({ classes, handleMenu, handleMenuClick }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>
        <span onClick={handleMenu} className={classes.closeIcon}>
          &#10006;
        </span>
        <ListItem button onClick={handleMenuClick.bind(null, "/")}>
          Home
        </ListItem>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(DefaultMenu));
