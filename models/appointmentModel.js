const { db } = require('../db');

const create = (start_time, date, client_id, barbershop_id) => {
  return db
    .query(
      'INSERT INTO appointments (start_time, date, client_id, barbershop_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [start_time, date, client_id, barbershop_id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM appointments')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM appointments WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (start_time, date, client_id, barbershop_id, id) => {
  return db
    .query(
      'UPDATE appointments SET start_time = $1, date = $2, client_id = $3, barbershop_id = $4 WHERE id = $5 RETURNING *',
      [start_time, date, client_id, barbershop_id, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM appointments WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };