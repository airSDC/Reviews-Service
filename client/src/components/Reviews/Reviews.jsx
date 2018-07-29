import React, { Component } from 'react';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avg_accuracy_rating: 0,
      avg_communication_rating: 0,
      avg_cleanliness_rating: 0,
      avg_location_rating: 0,
      avg_check_in_rating: 0,
      avg_value_rating: 0,
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
        // console.log(typeof reviews[0].accuracy_rating)
        this.setState({
          reviews,
          avg_accuracy_rating: reviews.reduce((total, review) => total + review.accuracy_rating, 0) / reviews.length,
          avg_communication_rating: reviews.reduce((total, review) => total + review.communication_rating, 0) / reviews.length,
          avg_cleanliness_rating: reviews.reduce((total, review) => total + review.cleanliness_rating, 0) / reviews.length,
          avg_location_rating: reviews.reduce((total, review) => total + review.location_rating, 0) / reviews.length,
          avg_check_in_rating: reviews.reduce((total, review) => total + review.check_in_rating, 0) / reviews.length,
          avg_value_rating: reviews.reduce((total, review) => total + review.value_rating, 0) / reviews.length,
        });
        // console.log(this.state.avg_accuracy_rating)
        // console.log(this.state.avg_communication_rating)
        // console.log(this.state.avg_cleanliness_rating)
        // console.log(this.state.avg_location_rating)
        // console.log(this.state.avg_check_in_rating)
        // console.log(this.state.avg_value_rating)
        // reviews.reduce((review) => {
        //   this.setState();
        // });
        console.log(this.state.reviews);
        // return this.setState({ reviews });
      })
      .catch(error => console.error('Error in fetching:', error));
  }

  render() {
    return (
      <div>
        <Search reviews={this.state.reviews} />
        <Rating reviews={this.state.reviews} {...this.state} />
        <div>
          {this.state.reviews.map(review => <SingleReview key={review.user} review={review} />)}
        </div>
      </div>
    );
  }
}

export default Reviews;
