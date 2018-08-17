const { Pool } = require('pg');

const pool = new Pool({
  user: 'allisonc',
  host: 'localhost',
  database: 'reviewsmodule',
  port: 5432,
});

module.exports = pool;
