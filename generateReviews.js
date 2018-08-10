const fs = require('fs');
const faker = require('faker');

const generateReviews = (n, start, startId) => {
  const write = fs.createWriteStream(`fakeData/fakeReviews${n}.csv`);
  let reviewId = startId;
  for (let i = start; i < start + 2500000; i += 1) {
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
  return reviewId;
};

generateReviews(4, 7500001, 37152766);
