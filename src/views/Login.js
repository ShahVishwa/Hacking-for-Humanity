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
    width: "100%",
    marginBottom: 15
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.continueAsGuest = this.continueAsGuest.bind(this);
  }

  onTextChange(evt) {
    this.setState({
      [[evt.target.name]]: evt.target.value
    });
  }

  onSubmit() {
    const values = this.state;
    this.props.setUserType("JOBSEEKER");
    this.props.history.push("/jobseeker/home");
  }

  continueAsGuest() {
    this.props.history.push("/jobseeker/home");
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Log In
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
            type="password"
            label="Password"
            value={password}
            onChange={this.onTextChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            color="primary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            color="secondary"
            onClick={this.continueAsGuest}
          >
            Continue as Guest
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
