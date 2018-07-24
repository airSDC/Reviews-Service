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
  // getAllReviews(roomId) {
  //   fetch(`/api/rooms/${roomId}/reviews`)
  //     .then(res => res.json())
  //     .then(reviews => {
  //       console.log(reviews)
  //       return this.setState({reviews: reviews})
  //     })
  //     .catch(error => console.error('Error in fetching:', error));
  // }
  // componentDidMount() {
  //   this.getAllReviews(1);
  // }
  render() {
    return (
      <div>
      <h2>{this.props.reviews.length} Reviews</h2>
      <form>
        <label>
          Mag Image
          <input type="text" placeholder="Search Reviews"/>
        </label>
      </form>
      </div>
    );
  }
}

export default Search;
