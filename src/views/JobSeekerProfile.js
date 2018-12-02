import React, { Component } from 'react';
import Chip from '../components/Chip';

class JobSeekerProfile extends Component {
  render() {

    return (
      <div>
      <div className="username">
        <h3>John Doe</h3>
        <img id='avatar' src="./" />
      
      </div>
      <div className="button">Searching for</div>
        <Chip />
      
      </div>
    );
  }
}

export default JobSeekerProfile;
