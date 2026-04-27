const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'loa_db',
  password: 'your_db_password',
  port: 5432,
});

pool.connect()
  .then(() => console.log('PostgreSQL Connected'))
  .catch(err => console.error('DB Connection Error', err));

module.exports = pool;
