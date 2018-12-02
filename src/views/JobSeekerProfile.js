import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";

const styles = {
  root: {
    textAlign: "center"
  },
  aboutMe: {
    width: "100%"
  },
  spacing: {
    marginBottom: 20
  },
  card: {
    textAlign: "left"
  },
  chip: {
    marginBottom: 10,
    marginRight: 5
  }
};

class JobSeekerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: "",
      experience: [
        {
          title: "Kitchen Worker",
          startDate: "January 2015",
          endDate: "October 2018",
          company: "Bob's Kitchen",
          id: 12346
        }
      ],
      skills: [
        { key: 0, label: "Customer Service" },
        { key: 1, label: "Multitasking" },
        { key: 2, label: "Microsoft Excel" }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [[evt.target.name]]: evt.target.value
    });
  }

  handleDelete = data => () => {
    this.setState(state => {
      const skills = [...state.skills];
      const skillToDelete = skills.indexOf(data);
      skills.splice(skillToDelete, 1);
      return { skills };
    });
  };

  render() {
    const { classes } = this.props;
    const { aboutMe, experience, skills } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.spacing}>
          <h3>Sara Smith</h3>
          <img
            id="avatar"
            alt="avatar"
            src="https://cowdy.co.nz/wp-content/uploads/face-placeholder.jpg"
          />
        </div>

        <div className={classes.spacing}>
          <TextField
            multiline
            value={aboutMe}
            onChange={this.handleChange}
            name="aboutMe"
            label="About Me"
            className={classes.aboutMe}
          />
        </div>

        <div className={classes.spacing}>
          <JobSeekerExperience experience={experience} classes={classes} />
        </div>

        <div className={classes.spacing}>
          <JobSeekerSkills
            classes={classes}
            skills={skills}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

const JobSeekerExperience = ({ classes, experience }) => {
  const ExperienceCard = ({ position, classes }) => {
    const { title, startDate, endDate, company, id } = position;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {company}
          </Typography>
          <Typography color="textSecondary">{`${startDate} - ${endDate}`}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    );
  };

  return experience.map(position => (
    <ExperienceCard key={position.id} position={position} classes={classes} />
  ));
};

const JobSeekerSkills = ({ classes, skills, handleDelete }) => {
  return (
    <div>
      {skills.map(data => {
        let icon = null;

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </div>
  );
};

export default withStyles(styles)(JobSeekerProfile);
