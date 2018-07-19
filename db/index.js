const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airfec');
var db = mongoose.connection;

db.once('open', function() {
    let reviewSchema = new mongoose.Schema({
      room_id: Number,
      User: String,
      created_at: Date,
      review_text: String,
      Image_url: String,
      accuracy_rating: Number,
      communication_rating: Number,
      cleanliness_rating: Number,
      location_rating: Number,
      check_in_rating: Number,
      value_rating: Number,
      Is_reported: Boolean,
  });


  let Review = mongoose.model('Review', reviewSchema);

  let save = (data) => {
    var reviewInstance = new Review(data);
    reviewInstance.save(function(err, stored) {
      if (err) {
        console.log('err when saving data: ', err);
      }
    });
  }

  let retrieveAll = function(callback) {
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