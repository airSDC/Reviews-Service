import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import Search from '../Search';

class SingleReview extends Component {
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
        <h3 key={this.props.review.user}>{this.props.review.user}</h3>
        <h4 key={this.props.review.created_at}>{this.props.review.created_at}</h4>
        <p key={this.props.review.room_id}>{this.props.review.review_text}</p>
      </div>
    );
  }
}

export default SingleReview;
