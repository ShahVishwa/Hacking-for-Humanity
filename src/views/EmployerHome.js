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

class EmployerHome extends React.Component {
  constructor(props) {
    super(props);

    this.handleListingClick = this.handleListingClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddNewJob = this.handleAddNewJob.bind(this);
  }

  handleListingClick(listingId) {
    this.props.history.push(`/employer/listing/edit/${listingId}`);
  }
  handleChange(evt) {
    this.setState({ [[evt.target.name]]: evt.target.value });
  }
  handleAddNewJob() {
    this.props.history.push(`/employer/add-listing`);
  }

  render() {
    const { classes, listings } = this.props;
    return (
      <div>
        <Typography variant="h5" color="inherit" className={classes.subTitle}>
          My Job Listings
        </Typography>
        <Button
          onClick={this.handleAddNewJob}
          className={classes.input}
          color="primary"
          variant="contained"
        >
          Add New Job
        </Button>
        <ListingContainer
          listings={listings}
          handleListingClick={this.handleListingClick}
          classes={classes}
        />
      </div>
    );
  }
}

const ListingContainer = ({ classes, handleListingClick, listings }) => {
  const formattedListings = listings.map(listing => (
    <ListingCard
      key={listing.id}
      listing={listing}
      classes={classes}
      handleListingClick={handleListingClick}
    />
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
        <Button
          onClick={handleListingClick.bind(null, id)}
          variant="outlined"
          size="small"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(EmployerHome);
