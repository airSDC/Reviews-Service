const models = require('../models');

module.exports = {
  get: (req, res) => {
    // console.log('here is my req.params :', req.params.roomId)
    models.Review.find({ 'room_id': JSON.parse(req.params.roomId) }, function(err, reviews) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  }
}