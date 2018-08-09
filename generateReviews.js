const fs = require('fs');
const faker = require('faker');

console.time('reviews');

const generateReviews = (n, start, end) => {
  const write = fs.createWriteStream(`fakeData/fakeReviews${n}.csv`);
  let reviewId = 0;
  for (let i = start; i < end; i += 1) {
    for (let j = 0; j < Math.floor(25 * Math.random()); j += 1) {
      reviewId += 1;
      const userId = faker.random.number(500);
      const createdAt = faker.date.past(10);
      const reviewText = faker.lorem.paragraphs(1);
      const accuracyRating = faker.random.number({ min: 1, max: 5 });
      const communicationRating = faker.random.number({ min: 1, max: 5 });
      const cleanlinessRating = faker.random.number({ min: 1, max: 5 });
      const locationRating = faker.random.number({ min: 1, max: 5 });
      const checkInRating = faker.random.number({ min: 1, max: 5 });
      const valueRating = faker.random.number({ min: 1, max: 5 });
      const isReported = faker.random.boolean();
      const csv = `${reviewId}, ${i}, ${userId}, ${createdAt}, ${reviewText}, ${accuracyRating}, ${communicationRating}, ${cleanlinessRating}, ${locationRating}, ${checkInRating}, ${valueRating}, ${isReported},\n`;
      write.write(csv);
    }
  }
  write.end();
};

generateReviews(1, 1, 2500001);
generateReviews(2, 2500001, 5000001);
console.timeEnd('reviews');
