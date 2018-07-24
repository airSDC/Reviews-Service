import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';

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
    this.getAllReviews(1);
  }
  render() {
    return (
      <div>
        <Search reviews={this.state.reviews} />
        <div></div>
        <div>
        {this.state.reviews.map(review => 
          <SingleReview key={review.user} review={review} />)}
        </div>
      </div>
    );
  }
}

export default Reviews;
