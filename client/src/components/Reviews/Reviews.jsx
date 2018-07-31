import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Search from '../Search';
import SingleReview from '../SingleReview';
import Rating from '../Rating';
import Pagination from '../Pagination';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avg_accuracy_rating: 0,
      avg_communication_rating: 0,
      avg_cleanliness_rating: 0,
      avg_location_rating: 0,
      avg_check_in_rating: 0,
      avg_value_rating: 0,
      selectedPage: 1,
      reviewsPerPage: 6,
      searchValue: '',
      showBackToReviews: false,
      tempAllReviews: [],
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleBackToReviewsButton = this.handleBackToReviewsButton.bind(this);
  }

  componentDidMount() {
    const paths = window.location.pathname.substr(1).split('/');
    const roomNum = paths[1];
    this.getAllReviews(roomNum);
  }

  getAllReviews(roomId) {
    fetch(`/api/rooms/${roomId}/reviews`)
      .then(res => res.json())
      .then((reviews) => {
        this.setState({
          reviews,
          tempAllReviews: reviews,
          avg_accuracy_rating: reviews.reduce((total, review) => total
            + review.accuracy_rating, 0) / reviews.length,
          avg_communication_rating: reviews.reduce((total, review) => total
            + review.communication_rating, 0) / reviews.length,
          avg_cleanliness_rating: reviews.reduce((total, review) => total
            + review.cleanliness_rating, 0) / reviews.length,
          avg_location_rating: reviews.reduce((total, review) => total
            + review.location_rating, 0) / reviews.length,
          avg_check_in_rating: reviews.reduce((total, review) => total
            + review.check_in_rating, 0) / reviews.length,
          avg_value_rating: reviews.reduce((total, review) => total
            + review.value_rating, 0) / reviews.length,
        });
        const totalAveRating = (this.state.avg_accuracy_rating
          + this.state.avg_communication_rating
          + this.state.avg_cleanliness_rating
          + this.state.avg_location_rating
          + this.state.avg_check_in_rating
          + this.state.avg_value_rating) / 6;
        const roundedTotalRating = Math.round(totalAveRating * 2) / 2;
        this.setState({
          avgTotalRating: roundedTotalRating,
        });
      })
      .catch(error => console.error('Error in fetching:', error));
  }

  handleStarRating(ratingCategory) {
    const roundedRating = Math.round(ratingCategory * 2) / 2;
    if (roundedRating === 5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 4.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
        </div>
      );
    } else if (roundedRating === 4) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 0.5) {
      return (
        <div>
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    }
    return (
      <div />
    );
  }

  handleClick(e) {
    this.setState({
      selectedPage: Number(e.target.id),
    });
  }

  handleSearchValue(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleSearchClick() {
    const { reviews, searchValue } = this.state;
    this.setState({
      reviews: reviews
        .filter(review => review.review_text.includes(searchValue)),
      showBackToReviews: true,
    });
  }

  handleBackToReviewsButton() {
    const { tempAllReviews } = this.state;
    this.setState({
      reviews: tempAllReviews,
      showBackToReviews: false,
    });
  }

  render() {
    return (
      <div>
        <Search
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleSearchClick={this.handleSearchClick}
          handleSearchValue={this.handleSearchValue}
        />
        <Rating
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleBackToReviewsButton={this.handleBackToReviewsButton}
        />
        <div>
          {this.state.reviews.map(review => (
            <SingleReview
              key={review.user}
              review={review}
              handleReadMore={this.handleReadMore}
              {...this.state}
            />))}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Reviews;
