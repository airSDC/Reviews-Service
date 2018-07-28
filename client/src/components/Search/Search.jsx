import React from 'react';
import FontAwesome from 'react-fontawesome';

const Search = props => (
  <div className="search-container">
    <div className="review-length-container">
      <div className="">
        {props.reviews.length}
      </div>
      <div className="">
        Reviews
      </div>
      <div className="">
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
    </div>

    <div className="bar-container">
      <form>
        <input className="search-bar" type="text" placeholder="Search Reviews" />
      </form>
    </div>
  </div>
);

export default Search;
