import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import Search from '../Search';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
    };
  }
  // <img src={this.props.review.image_url} alt="user"/>
  render() {
    return (
      <div>
        <h4>Accuracy         Location</h4>
        <h4>Communication    Check-in</h4>
        <h4>Cleanliness      Value</h4>
      </div>
    );
  }
}

export default Rating;
