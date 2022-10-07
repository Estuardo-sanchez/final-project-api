const { db } = require('../db');

const create = (name, last_name, email, phone, start_time, date, barbershop_id) => {
  return db
    .query(
      'INSERT INTO appointments (name, last_name, email, phone, start_time, date, barbershop_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, last_name, email, phone, start_time, date, barbershop_id]
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

const update = (name, last_name, email, phone, start_time, date, barbershop_id, id) => {
  return db
    .query(
      'UPDATE appointments SET start_time = $1, date = $2, client_id = $3, barbershop_id = $4 WHERE id = $5 RETURNING *',
      [name, last_name, email, phone, start_time, date, barbershop_id, id]
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