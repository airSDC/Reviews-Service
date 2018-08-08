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
  post: (req, res) => {
    const newReview = new models.Review();
    newReview.room_id = req.params.roomId;
    newReview.user = req.body.user;
    newReview.created_at = req.body.created_at;
    newReview.review_text = req.body.review_text;
    newReview.image_url = req.body.image_url;
    newReview.accuracy_rating = req.body.accuracy_rating;
    newReview.communication_rating = req.body.communication_rating;
    newReview.cleanliness_rating = req.body.cleanliness_rating;
    newReview.location_rating = req.body.location_rating;
    newReview.check_in_rating = req.body.check_in_rating;
    newReview.value_rating = req.body.value_rating;
    newReview.is_reported = req.body.is_reported;
    newReview.save()
      .then(() => {
        res.status(201).send();
      })
      .catch(() => {
        res.status(500).send();
      });
  },
  put: (req, res) => {
    models.Review.findByIdAndUpdate(req.params.reviewToUpdate,
      req.body, { new: true }, (err, review) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(review);
      });
  },
  delete: (req, res) => {
    models.Review.findByIdAndRemove(req.params.reviewToDelete, (err, review) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send();
    });
  },
};
