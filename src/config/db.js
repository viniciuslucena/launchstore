const { Pool } = require('pg');

module.exports = new Pool({
  user: 'baladowski',
  password: '12345',
  host: 'localhost',
  port: 5432,
  database: 'lauchstore'
});
