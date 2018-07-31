import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Search = ({
  tempAllReviews,
  handleStarRating,
  avgTotalRating,
  handleSearchClick,
  handleSearchValue,
}) => (
  <div className="search-container border">
    <div className="total-rating-container">
      <span className="review-length-container">
        {tempAllReviews.length}
      </span>
      <span className="review-length-container">
        Reviews
      </span>
      <span>
        {handleStarRating(avgTotalRating)}
      </span>
    </div>
    <div className="search-bar-container">
      <form className="search-bar-area">
        <FontAwesome name="search" className="" onClick={handleSearchClick} />
        <input className="search-input" type="text" placeholder="Search Reviews" onChange={handleSearchValue} />
      </form>
    </div>

  </div>
);

Search.propTypes = {
  tempAllReviews: PropTypes.array.isRequired,
  handleStarRating: PropTypes.func.isRequired,
  avgTotalRating: PropTypes.number,
  handleSearchClick: PropTypes.func.isRequired,
  handleSearchValue: PropTypes.func.isRequired,
};

export default Search;
