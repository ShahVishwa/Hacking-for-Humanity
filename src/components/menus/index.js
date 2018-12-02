import React from "react";
import { Link } from "react-router-dom";

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
  }

  render() {
    const { userType, classes, handleMenu } = this.props;

    switch (userType) {
      case "GUEST":
        return <UnauthorizedMenu handleMenu={handleMenu} classes={classes} />;
      case "JOBSEEKER":
        return <JobSeekerMenu classes={classes} handleMenu={handleMenu} />;
    }
  }
}

const JobSeekerMenu = ({ classes, handleMenu }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>
        <span onClick={handleMenu} className={classes.closeIcon}>
          &#10006;
        </span>
        <ListItem button>
          <Link className={classes.linkItem} to="/jobseeker/home">
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={classes.linkItem} to="/jobseeker/profile">
            Profile
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={classes.linkItem} to="/jobseeker/support">
            Resources Near You
          </Link>
        </ListItem>
      </div>
    </div>
  );
};

const UnauthorizedMenu = ({ classes, handleMenu }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>
        <span onClick={handleMenu} className={classes.closeIcon}>
          &#10006;
        </span>
        <ListItem button>
          <Link className={classes.linkItem} to="/">
            Home
          </Link>
        </ListItem>
      </div>
    </div>
  );
};

export default withStyles(styles)(DefaultMenu);
