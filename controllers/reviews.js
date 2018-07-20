const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.Review.find({}, function(err, reviews) {
      if (err) {
        console.log(err);
      } else {
        res.json(reviews);
      }
    });
  }
}