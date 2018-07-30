import React from 'react';

const Rating = props => (
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
        {props.handleStarRating(props.avg_accuracy_rating)}
      </div>
      <div>
        {props.handleStarRating(props.avg_communication_rating)}
      </div>
      <div>
        {props.handleStarRating(props.avg_cleanliness_rating)}
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
        {props.handleStarRating(props.avg_location_rating)}
      </div>
      <div>
        {props.handleStarRating(props.avg_check_in_rating)}
      </div>
      <div>
        {props.handleStarRating(props.avg_value_rating)}
      </div>
    </div>
  </div>
);

export default Rating;
