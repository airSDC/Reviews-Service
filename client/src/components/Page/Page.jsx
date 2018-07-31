import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ handleReviewsSelected, pageNum }) => (
  <div>
    <li>
      <button type="button" onClick={handleReviewsSelected}>
        {pageNum}
      </button>
    </li>
  </div>
);

Page.propTypes = {
  handleReviewsSelected: PropTypes.func.isRequired,
  pageNum: PropTypes.string.isRequired,
};

export default Page;
