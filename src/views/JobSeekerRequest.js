import React from "react";
import { NotificationManager } from "react-notifications";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  title: {
    marginBottom: 10
  },
  input: {
    marginBottom: 10
  },
  button: {
    marginBottom: 10
  },
  formControl: {
    marginBottom: 20
  }
};

class JobSeekerRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computer: false,
      mobileDevices: false,
      busPass: false,
      vehicle: false,
      clothes: false,
      toiletries: false,
      uberRides: false,
      otherResources: "",
      mentoring: false,
      resumeWriting: false,
      interviewPrep: false,
      jobApplication: false,
      haircut: false,
      childcare: false,
      otherServices: "",
      page: 0
    };

    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleBackPage = this.handleBackPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleInputChange = name => evt => {
    this.setState({ [name]: evt.target.value });
  };

  handleNextPage() {
    this.setState(state => ({ page: state.page + 1 }));
  }
  handleBackPage() {
    this.setState(state => ({ page: state.page - 1 }));
  }
  handleSubmit() {
    this.props.history.push("/jobseeker/home");
    NotificationManager.info("Thank you for submitting!");
  }

  render() {
    const { classes } = this.props;
    const {
      computer,
      mobileDevices,
      busPass,
      vehicle,
      clothes,
      toiletries,
      uberRides,
      otherResources,
      mentoring,
      resumeWriting,
      interviewPrep,
      jobApplication,
      haircut,
      childcare,
      otherServices,
      page
    } = this.state;
    return (
      <div className={classes.root}>
        {page === 0 && (
          <div>
            <Typography className={classes.title} variant="h5">
              Things I Need
            </Typography>
            <FormControl
              fullWidth
              component="fieldset"
              className={classes.formControl}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={computer}
                      onChange={this.handleChange("computer")}
                      value="computer"
                    />
                  }
                  label="Computer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={mobileDevices}
                      onChange={this.handleChange("mobileDevices")}
                      value="mobileDevices"
                    />
                  }
                  label="Mobile Devices"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={busPass}
                      onChange={this.handleChange("busPass")}
                      value="busPass"
                    />
                  }
                  label="Bus Pass"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicle}
                      onChange={this.handleChange("vehicle")}
                      value="vehicle"
                    />
                  }
                  label="Vehicle"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={clothes}
                      onChange={this.handleChange("clothes")}
                      value="clothes"
                    />
                  }
                  label="Clothes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={toiletries}
                      onChange={this.handleChange("toiletries")}
                      value="toiletries"
                    />
                  }
                  label="Toiletries"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={uberRides}
                      onChange={this.handleChange("uberRides")}
                      value="uberRides"
                    />
                  }
                  label="Uber Rides / Transportation"
                />
                <TextField
                  multiline
                  className={classes.input}
                  label="Other Resources"
                  value={otherResources}
                  onChange={this.handleInputChange("otherResources")}
                  fullWidth
                />
                <Button
                  onClick={this.handleNextPage}
                  size="medium"
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </div>
        )}

        {page === 1 && (
          <div>
            <Typography className={classes.title} variant="h5">
              Services Available
            </Typography>

            <FormControl
              fullWidth
              component="fieldset"
              className={classes.formControl}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={mentoring}
                      onChange={this.handleChange("mentoring")}
                      value="mentoring"
                    />
                  }
                  label="Mentoring"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={resumeWriting}
                      onChange={this.handleChange("resumeWriting")}
                      value="resumeWriting"
                    />
                  }
                  label="Resume Writing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={interviewPrep}
                      onChange={this.handleChange("interviewPrep")}
                      value="interviewPrep"
                    />
                  }
                  label="Interview Preparation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobApplication}
                      onChange={this.handleChange("jobApplication")}
                      value="jobApplication"
                    />
                  }
                  label="Job Application Assistance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={haircut}
                      onChange={this.handleChange("haircut")}
                      value="haircut"
                    />
                  }
                  label="Haircuts"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={childcare}
                      onChange={this.handleChange("childcare")}
                      value="childcare"
                    />
                  }
                  label="Childcare"
                />
                <TextField
                  multiline
                  className={classes.input}
                  label="Other Services"
                  value={otherServices}
                  onChange={this.handleInputChange("otherServices")}
                  fullWidth
                />
                <Button
                  className={classes.button}
                  onClick={this.handleBackPage}
                  size="medium"
                  variant="contained"
                  color="secondary"
                >
                  Back
                </Button>
                <Button
                  onClick={this.handleSubmit}
                  size="medium"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </FormGroup>
            </FormControl>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(JobSeekerRequest);
