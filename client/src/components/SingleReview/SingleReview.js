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
  render() {
    return (
      <div className="border">
        <div className="align-items">
          <img className="user-image" src={this.props.review.image_url} alt="user"/>
          <span className="name" key={this.props.review.user}>{this.props.review.user}</span>
          <div key={this.props.review.created_at}>{this.props.review.created_at}</div>
        </div>
        <p key={this.props.review.room_id}>{this.props.review.review_text}</p>
      </div>
    );
  }
}

export default SingleReview;
