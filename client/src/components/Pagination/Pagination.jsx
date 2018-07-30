import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 1,
    };
    this.handleReviewsSelected = this.handleReviewsSelected.bind(this);
  }

  handleReviewsSelected() {
    //
  }

  render() {
    return (
      <div>
        <nav role="navigation">
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Pagination;
