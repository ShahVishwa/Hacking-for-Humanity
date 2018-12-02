import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = {
  subTitle: {
    marginBottom: 15
  },
  card: {
    marginBottom: 15
  },
  input: {
    marginBottom: 15
  }
};

class EmployerCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };

    this.handleCandidateClick = this.handleCandidateClick.bind(this);
  }

  handleCandidateClick(candidateId) {
    this.props.history.push(`/candidate/${candidateId}`);
  }

  render() {
    const { classes, candidates } = this.props;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.subTitle}>
          My Potential Candidates
        </Typography>
        <CandidateContainer
          candidates={candidates}
          handleCandidateClick={this.handleCandidateClick}
          classes={classes}
        />
      </div>
    );
  }
}

const CandidateContainer = ({ classes, handleCandidateClick, candidates }) => {
  const candidateListings = candidates.map(candidate => (
    <CandidateCard
      key={candidate.id}
      candidate={candidate}
      classes={classes}
      handleCandidateClick={handleCandidateClick}
    />
  ));

  return candidateListings;
};

const CandidateCard = ({ candidate, classes, handleCandidateClick }) => {
  const { name, description, id } = candidate;
  const shortenedDesc =
    description.length > 150
      ? description.substring(0, 150) + "..."
      : description;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">{shortenedDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleCandidateClick.bind(null, id)}
          variant="outlined"
          size="small"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(EmployerCandidates);
