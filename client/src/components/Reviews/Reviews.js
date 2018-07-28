import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const paths = window.location.pathname.substr(1).split('/');
    const roomNum = paths[1];
    this.getAllReviews(roomNum);
  }

  getAllReviews(roomId) {
    fetch(`/api/rooms/${roomId}/reviews`)
      .then(res => res.json())
      .then((reviews) => {
        reviews.reduce((review) => {
          this.setState();
        });
        console.log(reviews);
        return this.setState({ reviews });
      })
      .catch(error => console.error('Error in fetching:', error));
  }

  render() {
    return (
      <div>
        <Search reviews={this.state.reviews} />
        <Rating reviews={this.state.reviews} />
        <div>
          {this.state.reviews.map(review => 
          <SingleReview key={review.user} review={review} />)}
        </div>
      </div>
    );
  }
}

export default Reviews;
