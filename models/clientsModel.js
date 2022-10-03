const { db } = require('../db');

const create = (name, email, password, admin) => {
  return db
    .query(
      'INSERT INTO clients (name, email, password, admin) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, password, admin]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM clients')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM clients WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, email, password, admin, id) => {
  return db
    .query(
      'UPDATE clients SET name = $1, email = $2, password = $3, admin = $4 WHERE id = $5 RETURNING *',
      [name, email, password, admin, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM clients WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };