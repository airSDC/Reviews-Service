const db = require('./models');
const faker = require('faker');
const mongoose = require('mongoose');


const Review = require('./models/Review')

class ReviewGenerator {
  constructor() {
    this.reviews = [];
  }

  createReviews() {
    const years = [2016, 2017, 2018];
    for (let i = 0; i < 100; i += 1) {
      for (let j = 0; j < Math.floor(Math.random() * (76)); j += 1) {
        const review = {};
        review.room_id = i;
        review.user = faker.name.findName();
        review.created_at = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
        review.review_text = faker.lorem.paragraph();
        // review.image_url = faker.random.image();
        review.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpeg`;

        review.accuracy_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.communication_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.cleanliness_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.location_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.check_in_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.value_rating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.is_reported = faker.random.boolean();
        const reviewItem = new db.Review(review);
        const temp = reviewItem.save();
        this.reviews.push(temp);
      }
    }

    // close connection to db
    Promise.all(this.reviews)
      .then(function(results) {
        console.log('sample item', results);
        console.log(results.length + ' entrys saved in DataBase');
      })
      .catch(function(err) {
        console.error(err);
      })
      .then(function() {
        mongoose.connection.close(function() {
          process.exit(0);
        });
      });
    return this.reviews;
  }
}

db.Review.remove({}).exec((err) => {
  if (err) {
    console.log(err);
  }
  const reviewGenerator = new ReviewGenerator();
  const fakeReviews = reviewGenerator.createReviews();
  // const save = (data) => {
  //   const reviewInstance = new Review(data);
  //   reviewInstance.save((error) => {
  //     if (err) {
  //       console.log('err when saving data: ', error);
  //     }
  //   });
  // };
  // fakeReviews.forEach((review) => {
  //   save(review);
  // });
});
// module.exports = { fakeReviews: fakeReviews };