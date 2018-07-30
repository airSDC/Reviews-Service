import React from 'react';
import PropTypes from 'prop-types';

const SingleReview = ({ review, handleReadMore, restOfText, hideReadMoreButton }) => (
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
    <div>
      {review.review_text.length < 100 ?
        (<p key={review.room_id}>
          {review.review_text}
        </p>) : 
        <div>
          {review.review_text.substring(0, 100)}
          { hideReadMoreButton ? null : <button className="read-more" onClick={() => handleReadMore(review.review_text.substring(100))}>
            ... Read more
          </button>}
          <span>{restOfText}</span>
        </div>
      }
    </div>
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
