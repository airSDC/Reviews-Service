const fs = require('fs');
const faker = require('faker');

const generateReviews = (n, start, startId) => {
  const write = fs.createWriteStream(`fakeData/fakeReviews${n}.csv`);
  let reviewId = startId;
  for (let i = start; i < start + 2500001; i += 1) {
    for (let j = 0; j < Math.floor(25 * Math.random()); j += 1) {
      reviewId += 1;
      const userName = faker.name.findName();
      const userImage = faker.image.avatar();
      const createdAt = faker.date.past(10);
      const reviewText = faker.lorem.paragraphs(1);
      const accuracyRating = faker.random.number({ min: 1, max: 5 });
      const communicationRating = faker.random.number({ min: 1, max: 5 });
      const cleanlinessRating = faker.random.number({ min: 1, max: 5 });
      const locationRating = faker.random.number({ min: 1, max: 5 });
      const checkInRating = faker.random.number({ min: 1, max: 5 });
      const valueRating = faker.random.number({ min: 1, max: 5 });
      const isReported = faker.random.boolean();
      const csv = `${reviewId}, ${i}, room${i},${userName}, ${userImage}, ${createdAt}, ${reviewText}, ${accuracyRating}, ${communicationRating}, ${cleanlinessRating}, ${locationRating}, ${checkInRating}, ${valueRating}, ${isReported}\n`;
      write.write(csv);
    }
  }
  write.end();
  return reviewId;
};

console.log(generateReviews(4, 7500001, 37138624));

// CREATE TABLE IF NOT EXISTS reviews_module.reviews(id INT, room_id INT, room_name VARCHAR, user_name VARCHAR, user_image VARCHAR, created_at VARCHAR, review_text TEXT, accuracy_rating INT, communication_rating INT, cleanliness_rating INT, location_rating INT, check_in_rating INT, value_rating INT, is_reported BOOLEAN, PRIMARY KEY(room_id, id));

// CREATE MATERIALIZED VIEW IF NOT EXISTS reviews_module.reviewsbyroomname AS SELECT * FROM reviews_module.reviews WHERE room_id IS NOT NULL AND id IS NOT NULL PRIMARY KEY(room_name, room_id, id);

// WHERE column1 IS NOT NULL AND column2 IS NOT NULL ...
// PRIMARY KEY(column1, column2, ...)

// id, room_id, room_name, user_name, user_image, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported

// CREATE MATERIALIZED VIEW IF NOT EXISTS reviews_module.reviewsbyroomname AS SELECT * FROM reviews_module.reviews WHERE room_name IS NOT NULL AND room_id IS NOT NULL AND id IS NOT NULL PRIMARY KEY(room_name, room_id, id);

// CREATE MATERIALIZED VIEW IF NOT EXISTS reviews_module.reviewsbyroomid AS SELECT * FROM reviews_module.reviews WHERE room_id IS NOT NULL AND id IS NOT NULL PRIMARY KEY(room_id, id);

// cqlsh: reviews_module > CREATE MATERIALIZED VIEW IF NOT EXISTS reviews_module.reviewsbyroomname AS SELECT * FROM reviews_module.reviews WHERE room_name IS NOT NULL AND room_id IS NOT NULL AND id IS NOT NULL PRIMARY KEY(room_name, room_id, id);


// room_id, id, accuracy_rating, check_in_rating, cleanliness_rating, communication_rating, created_at, is_reported, location_rating, review_text, room_name, user_image, user_name, value_rating

// 10000000, 49523790, 2, 3, 4, 5, 'Mon May 19 2010 13:09:33 GMT-0700 (PDT)', false, 3, 'Et tempora earum dignissimos atque. Voluptas qui et assumenda aspernatur molestiae quos recusandae.', 'room10000000', 'https://s3.amazonaws.com/uifaces/faces/twitter/juanmamartinez/128.jpg', 'Ms. Triston Hettingers', 3

// INSERT INTO reviews(room_id, id, accuracy_rating, check_in_rating, cleanliness_rating, communication_rating, created_at, is_reported, location_rating, review_text, room_name, user_image, user_name, value_rating) VALUES(10000000, 49523791, 2, 3, 4, 5, 'Wed May 21 2010 13:09:33 GMT-0700 (PDT)', false, 3, 'Et tempora earum dignissimos atque. Et tempora earum dignissimos atque. Voluptas qui et assumenda aspernatur molestiae quos recusandae.', 'room10000000', 'https://s3.amazonaws.com/uifaces/faces/twitter/juanmamartinez/128.jpg', 'Ms. Triston Hettingers', 3);
