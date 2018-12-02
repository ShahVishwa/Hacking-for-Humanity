import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  title: {
    marginBottom: 15
  },
  getStarted: {
    textDecoration: "none",
    color: "white"
  },
  tag: {
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "italic"
  },
  root: {
    textAlign: "center",
    paddingTop: "40px"
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src={require("../logo.png")} alt="Logo" />
        <p className={classes.tag}>
          Empower, Transform, & Create Connections to Transition into Employment
        </p>
        <Button variant="contained" size="large" color="primary">
          <Link className={classes.getStarted} to="/signup">
            Get Started
          </Link>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
