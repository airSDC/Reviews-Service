import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import Search from '../Search';
// import '../../styles/main.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
    };
  }
  render() {
    return (
      <div className="border align-items">
        <span className="text">{this.props.reviews.length} Reviews</span>
        <span>
          <form>
            <label >
              Mag Image
             <input className="search-bar" type="text" placeholder="Search Reviews"/>
            </label>
          </form>
        </span>
      </div>
    );
  }
}

export default Search;
