import React from 'react';
import FontAwesome from 'react-fontawesome';

const Rating = () => (
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
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
      <div>
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
      <div>
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
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
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
      <div>
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
      <div>
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
    </div>
  </div>
);

export default Rating;
