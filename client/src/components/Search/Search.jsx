import React from 'react';
import FontAwesome from 'react-fontawesome';

// const Search = props => (
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_total_rating: 0,
      searchValue: '',
    };
  }

  render() {
    return (
      <div className="search-container">
        <div className="review-length-container">
          <div className="">
            <span className="space-right">
              {this.props.reviews.length}
            </span>
            <span className="space-right">
              Reviews
            </span>
            {this.props.handleStarRating(this.props.avg_total_rating)}
          </div>
        </div>

        <div className="bar-container">
          <form>
            <FontAwesome name="search" className="" onClick={this.props.handleSearchClick} />
            <input className="" type="text" placeholder="Search Reviews" onChange={this.props.handleSearchValue} />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
