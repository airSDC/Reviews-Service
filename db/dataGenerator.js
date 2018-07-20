// const db = require('../models');
const faker = require('faker');
const mongoose = require('mongoose');
// const Review = require('./models/Review');

class FakeDataGenerator {
  constructor() {
    this.data = [];
  }
  createData() {
    const years = [2016, 2017, 2018]
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < Math.floor(Math.random() * (76)); j++) {
        let dataItem = {};
        dataItem.room_id = i;
        dataItem.user = faker.name.findName();
        dataItem.created_at = faker.date.month() + ' ' + years[Math.floor(Math.random() * (3))];
        dataItem.review_text = faker.lorem.paragraph();
        dataItem.image_url = faker.random.image();
        dataItem.accuracy_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.communication_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.cleanliness_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.location_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.check_in_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.value_rating = faker.random.number({
          min: 1,
          max: 5
        });
        dataItem.is_reported = faker.random.boolean();

        this.data.push(dataItem);
        // const reviewInstance = new Review(dataItem);
        // // Come back to this later: try using promises to make sure that this does not time out when using circleCI
        // reviewInstance.save(function(err, stored) {
        //   if (err) {
        //     console.log('err when saving data: ', err);
        //   }
        //   // db.disconnect();
        //   mongoose.connection.close(function() {
        //     console.log('db is now closed')
        //   });
        //   // break;
        // });
      }
    }
    return this.data;
  }
}

let myFactory = new FakeDataGenerator();
let fakeData = myFactory.createData();

// const save = (data) => {
//   const reviewInstance = new Review(data);
//   reviewInstance.save(function(err, stored) {
//     if (err) {
//       console.log('err when saving data: ', err);
//     }
//   });
// }

// fakeData.forEach((review) => {
//   save(review);
// });


module.exports = { fakeData: fakeData };