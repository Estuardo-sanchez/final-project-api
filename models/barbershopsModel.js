const { db } = require('../db');

const create = (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) => {
  return db
    .query(
      'INSERT INTO barbershops (userId, name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM barbershops')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM barbershops WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude, id) => {
  return db
    .query(
      'UPDATE barbershops SET name = $1, street = $2, city = $3, province = $4, post_code = $5, open_hours = $6, cover_photo_url = $7, lattitude = $ 8, longitude = $9 WHERE id = $10 RETURNING *',
      [name, street, city, province, post_code, open_hours, cover_photo_url, lattitude, longitude, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM barbershops WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };