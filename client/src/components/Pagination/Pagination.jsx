import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';

const Pagination = ({ reviewsByPage, handleReviewsSelected }) => (
  <div>
    <nav role="navigation">
      <div>
        <ul>
          {Object.keys(reviewsByPage).map(pageNum => (
            <Page key={pageNum} pageNum={pageNum} handleReviewsSelected={handleReviewsSelected} />
          ))}
        </ul>
      </div>
    </nav>
  </div>
);

Pagination.propTypes = {
  reviewsByPage: PropTypes.object.isRequired,
  handleReviewsSelected: PropTypes.func.isRequired,
};

export default Pagination;
