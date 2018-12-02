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

class AddListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      description: "",
      location: "",
      jobType: ""
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
    this.props.addNewListing({
      id: Math.floor(Math.random() * 1000),
      ...this.state
    });
  }

  render() {
    const { classes } = this.props;
    const { name, company, location, description, jobType } = this.state;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Add Listing
        </Typography>
        <form>
          <TextField
            name="name"
            className={classes.input}
            label="Job Title"
            value={name}
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
            multiline
            name="description"
            className={classes.input}
            label="Description"
            value={description}
            onChange={this.onTextChange}
          />
          <TextField
            name="location"
            className={classes.input}
            label="Location"
            value={location}
            onChange={this.onTextChange}
          />
          <TextField
            name="jobType"
            className={classes.input}
            label="Job Type"
            value={jobType}
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
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(AddListing);
