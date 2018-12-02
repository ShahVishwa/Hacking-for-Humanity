import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  text: {
    marginBottom: 10
  }
};

class Candidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match, classes, candidates } = this.props;
    const id = parseInt(match.params.id, 10);
    const candidate = candidates.filter(candidate => candidate.id === id);
    const { name, description } = candidate[0];

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            {description}
          </Typography>
          <Button variant="contained" color="primary" size="medium">
            Contact
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Candidate);
