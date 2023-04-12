const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./geocoding.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS addresses (
    id INTEGER PRIMARY KEY,
    street TEXT,
    postal_code TEXT,
    city TEXT,
    state TEXT,
    country TEXT,
    latitude REAL,
    longitude REAL
  )`);
});

function insertAddress(address) {
  return new Promise((resolve, reject) => {
    const sql =
      'INSERT INTO addresses (postal_code, street, city, state, country) VALUES (?, ?, ?, ?, ?)';
    const params = [
      address.postal_code,
      address.street,
      address.city,
      address.state,
      address.country,
    ];

    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, ...address });
      }
    });
  });
}

function getAllAddresses() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM addresses';

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = {
  insertAddress,
  getAllAddresses,
  db,
};
