import React from "react";

import listings from "../data/listings";

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

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match, classes } = this.props;
    const id = parseInt(match.params.id, 10);
    const listing = listings.filter(listing => listing.id === id);
    const { name, location, company, description } = listing[0];

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {company}
          </Typography>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            {description}
          </Typography>
          <Button variant="contained" color="primary" size="medium">
            Apply
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Listing);
