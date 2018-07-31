import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';

const Pagination = ({
  reviewsByPage, handleReviewsSelected, selectedPage,
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
        </ul>
      </div>
    </nav>
  </div>
);

Pagination.propTypes = {
  reviewsByPage: PropTypes.object.isRequired,
  handleReviewsSelected: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
};

export default Pagination;
