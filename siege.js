const siege = require('siege');

const randomNumbers = [];

const arrSize = 150000;
for (let i = 0; i < arrSize; i += 1) {
  randomNumbers.push(1 + Math.floor(Math.random() * 10000000));
}

let sieger = siege().concurrent(30).on(3002);

for (let i = 0; i < randomNumbers.length; i += 1) {
  sieger = sieger.for(1).times.get(`/api/rooms/${randomNumbers[i]}/reviews`);
}

sieger.attack();