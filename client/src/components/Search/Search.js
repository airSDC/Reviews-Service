import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import Search from '../Search';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
    };
  }
  render() {
    return (
      <div>
        <span>{this.props.reviews.length} Reviews</span>
        <span>
          <form>
            <label>
              Mag Image
             <input type="text" placeholder="Search Reviews"/>
            </label>
          </form>
        </span>
      </div>
    );
  }
}

export default Search;
