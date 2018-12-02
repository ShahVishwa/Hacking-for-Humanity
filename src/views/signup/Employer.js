import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  title: {
    marginBottom: 15,
    textAlign: "left"
  },
  input: {
    marginBottom: 15,
    width: "100%"
  },
  button: {
    width: "100%"
  }
};

class Employer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      company: "",
      location: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTextChange(evt) {
    this.setState({
      [[evt.target.name]]: evt.target.value
    });
  }

  onSubmit() {
      this.props.setUserType("EMPLOYER");
      this.props.history.push("/employer/home")
  }

  render() {
    const { classes } = this.props;
    const { company, location, username, password } = this.state;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Profile
        </Typography>
        <form>
          <TextField
            name="username"
            className={classes.input}
            label="Username"
            value={username}
            onChange={this.onTextChange}
          />
          <TextField
            name="password"
            className={classes.input}
            label="Password"
            type="password"
            value={password}
            onChange={this.onTextChange}
          />
          <TextField
            name="company"
            className={classes.input}
            label="Company Name"
            value={company}
            onChange={this.onTextChange}
          />
          <TextField
            name="location"
            className={classes.input}
            label="Location"
            value={location}
            onChange={this.onTextChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            color="primary"
            onClick={this.onSubmit}
          >
              Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Employer);
