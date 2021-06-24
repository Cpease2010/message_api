const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'corypease',
  host: 'localhost',
  database: 'corypease',
  password: 'Imasoftd3v.',
  port: 5432,
})
pool.query('SELECT * FROM threads', (err, res) => {
  console.log(err, res.rows)
  pool.end()
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}