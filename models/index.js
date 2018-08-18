const { Pool } = require('pg');
const poolConfig = require('./config.js');

const pool = new Pool(poolConfig);

const getReviewsByRoomId = (params, cb) => {
  const queryText = 'SELECT reviews.allreviews.*, reviews.users.username, reviews.users.image, reviews.rooms.name FROM reviews.allreviews INNER JOIN reviews.users ON (reviews.allreviews.user_id = reviews.users.id) INNER JOIN reviews.rooms ON (reviews.allreviews.room_id = reviews.rooms.id) WHERE reviews.allreviews.room_id = $1';
  pool.query(queryText, params, (err, results) => {
    if (err) {
      console.log(`err in getReviewsByRoomId ${err}`);
    } else {
      cb(null, results);
    }
  });
};

const getReviewsByRoomName = (params, cb) => {
  const queryText = 'SELECT reviews.rooms.name, reviews.users.username, reviews.users.image, reviews.allreviews.* FROM reviews.rooms INNER JOIN reviews.allreviews ON (reviews.rooms.id = reviews.allreviews.room_id) INNER JOIN reviews.users ON (reviews.allreviews.user_id = reviews.users.id) WHERE reviews.rooms.name = $1';
  pool.query(queryText, params, (err, results) => {
    if (err) {
      console.log(`err in getReviewsByRoomName ${err}`);
    } else {
      cb(null, results);
    }
  });
};

const postReview = (params, cb) => {
  const queryText = 'INSERT INTO reviews.allreviews (room_id, user_id, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  pool.query(queryText, params, (err, results) => {
    if (err) {
      console.log(`err in postReview ${err}`);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getReviewsByRoomId,
  getReviewsByRoomName,
  postReview,
};
