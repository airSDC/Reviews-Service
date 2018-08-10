const fs = require('fs');
const faker = require('faker');

const generateUsers = () => {
  let csv = '';
  for (let i = 0; i < 501; i += 1) {
    const name = faker.name.findName();
    const image = faker.image.avatar();
    csv += `${i}, ${name}, ${image},\n`;
  }
  return csv;
};

fs.writeFile('fakeUsers.csv', generateUsers(), (err) => {
  if (err) throw err;
});
