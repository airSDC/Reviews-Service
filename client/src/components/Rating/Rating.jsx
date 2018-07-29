import React from 'react';
import FontAwesome from 'react-fontawesome';

// const Rating = (props) => {
class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.handleStarRating = this.handleStarRating.bind(this);
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
          <FontAwesome name="star-half" className="star" />
        </div>
      );
    } else if (roundedRating === 4) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 3.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
        </div>
      );
    } else if (roundedRating === 3) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 2.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
        </div>
      );
    } else if (roundedRating === 2) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 1.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
        </div>
      );
    } else if (roundedRating === 1) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 0.5) {
      return (
        <div>
          <FontAwesome name="star-half" className="star" />
        </div>
      );
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div className="border rating-container">
        <div className="rating-left">
          <div>
            Accuracy
          </div>
          <div>
            Communication
          </div>
          <div>
            Cleanliness
          </div>
        </div>
        <div className="rating-left">
          <div>
            {this.handleStarRating(this.props.avg_accuracy_rating)}
          </div>
          <div>
            {this.handleStarRating(this.props.avg_communication_rating)}
          </div>
          <div>
            {this.handleStarRating(this.props.avg_cleanliness_rating)}
          </div>
        </div>
        <div className="rating-right">
          <div>
              Location
          </div>
          <div>
              Check-in
          </div>
          <div>
              Value
          </div>
        </div>
        <div>
          <div>
            {this.handleStarRating(this.props.avg_location_rating)}
          </div>
          <div>
            {this.handleStarRating(this.props.avg_check_in_rating)}
          </div>
          <div>
            {this.handleStarRating(this.props.avg_value_rating)}
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
