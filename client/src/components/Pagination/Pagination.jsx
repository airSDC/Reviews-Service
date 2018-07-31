import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Page from '../Page';


const Pagination = ({
  reviewsByPage, handleReviewsSelected, selectedPage, handleRightArrow,
}) => (
  <div>
    <nav role="navigation">
      <div>
        <ul>
          {Object.keys(reviewsByPage).map((pageNum, index) => (
            <Page
              key={pageNum}
              pageNum={pageNum}
              handleReviewsSelected={handleReviewsSelected}
              active={index === selectedPage - 1}
            />
          ))}
          <li className="angle-right-list">
            <button type="button" className="angle-right-icon" onClick={handleRightArrow}>
              <FontAwesome name="angle-right" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

Pagination.propTypes = {
  reviewsByPage: PropTypes.object.isRequired,
  handleReviewsSelected: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
  handleRightArrow: PropTypes.func.isRequired,
};

export default Pagination;
