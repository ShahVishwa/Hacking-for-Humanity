import React from "react";

import { withStyles } from "@material-ui/core/styles";

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
    width: "45vw",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 3000
  }
};

class DefaultMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userType, classes } = this.props;

    switch (userType) {
      case "GUEST":
        return <UnauthorizedMenu classes={classes} />;
      case "JOBSEEKER":
        return <JobSeekerMenu classes={classes} />;
    }
  }
}

const JobSeekerMenu = ({ classes }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>Hello</div>
    </div>
  );
};

const UnauthorizedMenu = ({ classes }) => {
  return (
    <div>
      <div className={classes.root} />
      <div className={classes.menu}>Hello</div>
    </div>
  );
};

export default withStyles(styles)(DefaultMenu);
