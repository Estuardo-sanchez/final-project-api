const { db } = require('../db');

const create = (client_id, barbershop_id, day_id, rating) => {
  return db
    .query(
      'INSERT INTO appointment_reviews (client_id, barbershop_id, day_id, rating) VALUES ($1, $2, $3, $4) RETURNING *',
      [client_id, barbershop_id, day_id, rating]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM appointment_reviews')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM appointment_reviews WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (client_id, barbershop_id, day_id, rating, id) => {
  return db
    .query(
      'UPDATE appointment_reviews SET client_id = $1, barbershop_id = $2, day_id = $3, rating = $4 WHERE id = $5 RETURNING *',
      [client_id, barbershop_id, day_id, rating, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM appointment_reviews WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };