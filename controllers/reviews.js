const models = require('../models');

module.exports = {
  get: (req, res) => {
    // console.log('here is my req.body :', req)
    models.Review.find({ 'room_id': 1}, function(err, reviews) {
      if (err) {
        console.log(err);
      } else {
        res.json(reviews);
      }
    });
  }
}