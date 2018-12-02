import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 10
  },
  icon: {
    width: "100%",
    marginBottom: 10
  },
  iconButton: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://i1.wp.com/manageability.com/wp-content/uploads/2016/05/people-placeholder-full.png?ssl=1"
                alt="jobseeker"
                className={classes.icon}
              />
              <Link className={classes.link} to="/jobseeker/signup">
                <Button
                  className={classes.iconButton}
                  variant="contained"
                  size="medium"
                  color="secondary"
                >
                  For Jobseekers
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://www.fst.edu/wp-content/uploads/2017/06/Female-placeholder-headshot.jpg"
                alt="jobseeker"
                className={classes.icon}
              />
              <Link className={classes.link} to="/volunteer/signup">
                <Button
                  className={classes.iconButton}
                  variant="contained"
                  size="medium"
                  color="secondary"
                >
                  For Volunteers
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"
                alt="jobseeker"
                className={classes.icon}
              />
              <Link className={classes.link} to="/employer/signup">
                <Button
                  className={classes.iconButton}
                  variant="contained"
                  size="medium"
                  color="secondary"
                >
                  For Employers
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
