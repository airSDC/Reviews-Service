import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';

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
        <div>
        
        </div>
        <h1>
          Hello {this.state.hello} <FontAwesome name="rocket" size="2x" />
        </h1>
        <div>
        {this.state.reviews.map(review => {
          return (
          <div>
            <h3 key={review.user}>{review.user}</h3>
            <p key={review.room_id}>{review.review_text}</p>
          </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default Reviews;
