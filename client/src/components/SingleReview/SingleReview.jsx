import React from 'react';
import PropTypes from 'prop-types';

const SingleReview = ({ review }) => (
  <div className="border">
    <div className="review-container">
      <div className="image-container">
        <img className="user-image" src={review.image_url} alt="user" />
      </div>
      <div className="user-date-container">
        <div className="username">
          {review.user}
        </div>
        <div>
          {review.created_at}
        </div>
      </div>
    </div>
    <p key={review.room_id}>
      {review.review_text}
    </p>
  </div>
);

SingleReview.propTypes = {
  review: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    room_id: PropTypes.number.isRequired,
    review_text: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleReview;
