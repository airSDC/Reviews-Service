const express = require('express');
const path = require('path');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const numCPUs = require('os').cpus().length;
const routes = require('./../routes');

const app = express();

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.set('port', process.env.PORT || 3002);

  app.get('/', (req, res) => {
    res.redirect('/rooms/1');
  });

  app.use(express.static('public/'));
  app.use(express.static('client/dist'));

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.get('/rooms/:roomId', (req, res) => {
    const reactPath = path.join(__dirname, '../public/index.html');
    res.sendFile(reactPath);
  });

  app.use('/api', routes);
}

module.exports = app;
