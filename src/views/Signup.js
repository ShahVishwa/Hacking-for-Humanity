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
                src="https://placeimg.com/640/480/people"
                alt="jobseeker"
                className={classes.icon}
              />
              <Button
                className={classes.iconButton}
                variant="contained"
                size="medium"
                color="secondary"
              >
                  <Link className={classes.link} to="/jobseekers/signup">For Jobseekers</Link>
              </Button>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://placeimg.com/640/480/nature"
                alt="jobseeker"
                className={classes.icon}
              />
              <Button
                className={classes.iconButton}
                variant="contained"
                size="medium"
                color="secondary"
              >
                <Link className={classes.link} to="/volunteers/signup">For Volunteers</Link>
              </Button>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://placeimg.com/640/480/animals"
                alt="jobseeker"
                className={classes.icon}
              />
              <Button
                className={classes.iconButton}
                variant="contained"
                size="medium"
                color="secondary"
              >
                  <Link className={classes.link} to="/employers/signup">For Employers</Link>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
