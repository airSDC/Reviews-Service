import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world',
      reviews: []
    };
  }
  getAllReviews(roomId) {
    fetch(`/api/rooms/${roomId}/reviews`)
      .then(res => res.json())
      .then(reviews => {
        console.log(reviews)
        return this.setState({reviews: reviews})
      })
      .catch(error => console.error('Error in fetching:', error));
  }
  componentDidMount() {
    const paths = window.location.pathname.substr(1).split('/');
    const roomNum = paths[1];
    this.getAllReviews(roomNum);
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
