const fs = require('fs');

console.time('rooms');

const stream = fs.createWriteStream('fakeRooms.csv');

const generateRooms = () => {
  for (let i = 0; i < 10000001; i += 1) {
    const csv = `${i}, room${i},\n`;
    stream.write(csv);
  }
  stream.end();
};

generateRooms();

console.timeEnd('rooms');
