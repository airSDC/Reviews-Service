const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.Review.find({ room_id: Number(req.params.roomId) }, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  },
};
