const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airfec');
const db = mongoose.connection;
const fakeData = require('../generate');

db.once('open', function() {
    let reviewSchema = new mongoose.Schema({
      room_id: Number,
      user: String,
      created_at: String,
      review_text: String,
      image_url: String,
      accuracy_rating: Number,
      communication_rating: Number,
      cleanliness_rating: Number,
      location_rating: Number,
      check_in_rating: Number,
      value_rating: Number,
      is_reported: Boolean,
  });

  const Review = mongoose.model('Review', reviewSchema);

  const save = (data) => {
    const reviewInstance = new Review(data);
    reviewInstance.save(function(err, stored) {
      if (err) {
        console.log('err when saving data: ', err);
      }
    });
  }
  
  // fakeData.fakeData.forEach(function(review) {
  //   save(review);
  // });

  const retrieveAll = function(callback) {
    Review.find({}, function(err, reviews) {
      if (err) {
        console.log('err in database query: ', err);
      } else {
        callback(null, reviews);
      }
    });
  };

  module.exports.save = save;
  module.exports.retrieveAll = retrieveAll;
});