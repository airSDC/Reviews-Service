import React from 'react';
import PropTypes from 'prop-types';

const SingleReview = ({ review }) => (
  <div className="border">
    <div className="align-items">
      <img className="user-image" src={review.image_url} alt="user" />
      <span className="name" key={review.user}>
        {review.user}
      </span>
      <div key={review.created_at}>
        {review.created_at}
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
