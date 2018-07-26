const mongoose = require('mongoose');
// const fakeData = require('../generate');
// const faker = require('faker');

const ReviewSchema = new mongoose.Schema({
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

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;

// UNCOMMENT THIS TO SEED NEW DATA INTO DATABASE
// //const db = require('./models/');

// class ReviewGenerator {
//   constructor() {
//     this.reviews = [];
//   }
//   createReviews() {
//     const years = [2016, 2017, 2018]
//     for (let i = 0; i < 100; i++) {
//       for (let j = 0; j < Math.floor(Math.random() * (76)); j++) {
//         let review = {};
//         review.room_id = i;
//         review.user = faker.name.findName();
//         review.created_at = faker.date.month() + ' ' + years[Math.floor(Math.random() * (3))];
//         review.review_text = faker.lorem.paragraph();
//         // review.image_url = faker.random.image();
//         review.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpeg`;

//         review.accuracy_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.communication_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.cleanliness_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.location_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.check_in_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.value_rating = faker.random.number({
//           min: 1,
//           max: 5
//         });
//         review.is_reported = faker.random.boolean();

//         this.reviews.push(review);
//         // const reviewInstance = new Review(dataItem);
//         // // Come back to this later: try using promises to make sure that this does not time out when using circleCI
//         // reviewInstance.save(function(err, stored) {
//         //   if (err) {
//         //     console.log('err when saving data: ', err);
//         //   }
//         //   // db.disconnect();
//         //   mongoose.connection.close(function() {
//         //     console.log('db is now closed')
//         //   });
//         //   // break;
//         // });
//       }
//     }
//     return this.reviews;
//   }
// }

// let reviewGenerator = new ReviewGenerator();
// let fakeReviews = reviewGenerator.createReviews();

// const save = (data) => {
//   const reviewInstance = new Review(data);
//   reviewInstance.save(function(err, stored) {
//     if (err) {
//       console.log('err when saving data: ', err);
//     }
//   });
// }

// fakeReviews.forEach((review) => {
//   save(review);
// });


// module.exports = { fakeReviews: fakeReviews };