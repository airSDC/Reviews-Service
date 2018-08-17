const fs = require('fs');

const stream = fs.createWriteStream('./fakeData/fakeRooms.csv');

const generateRooms = () => {
  for (let i = 1; i < 10000001; i += 1) {
    const csv = `${i},room${i}\n`;
    stream.write(csv);
  }
  stream.end();
};

generateRooms();
