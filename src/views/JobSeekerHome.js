import React from "react";

import listings from "../data/listings";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  subTitle: {
    marginBottom: 10
  },
  card: {
    marginBottom: 15
  }
};

class JobSeekerHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleListingClick = this.handleListingClick.bind(this);
  }

  handleListingClick(listingId) {
    console.log("listing id: ", listingId);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.subTitle}>
          Listings
        </Typography>
        <ListingContainer
          handleListingClick={this.handleListingClick}
          classes={classes}
        />
      </div>
    );
  }
}

const ListingContainer = ({ classes, handleListingClick }) => {
  const formattedListings = listings.map(listing => (
    <ListingCard key={listing.id} listing={listing} classes={classes} handleListingClick={handleListingClick} />
  ));

  return formattedListings;
};

const ListingCard = ({ listing, classes, handleListingClick }) => {
  const { name, location, company, description, id } = listing;
  const shortenedDesc =
    description.length > 150
      ? description.substring(0, 150) + "..."
      : description;

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
        <Typography color="textSecondary">{shortenedDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleListingClick.bind(null, id)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(JobSeekerHome);
