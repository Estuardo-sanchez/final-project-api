module.exports = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS barbershops CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;

  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
  );


  CREATE TABLE barbershops (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    post_code VARCHAR(255) NOT NULL,
    open_hours VARCHAR(255) NOT NULL,
    cover_photo_url VARCHAR(255) NOT NULL,
    lattitude DECIMAL(20,18) NOT NULL,
    longitude DECIMAL(20,18) NOT NULL
  );

  CREATE TABLE appointments (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    start_time VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    barbershop_id INTEGER REFERENCES barbershops(id) ON DELETE CASCADE
  );
`