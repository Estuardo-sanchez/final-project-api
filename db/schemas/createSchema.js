module.exports = `
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS barbershops CASCADE;
DROP TABLE IF EXISTS days CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS appointmentReviews CASCADE;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  admin Boolean NOT NULL
  );

  CREATE TABLE barbershops (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    post_code VARCHAR(255) NOT NULL,
    open_hours VARCHAR(255) NOT NULL,
    cover_photo_url VARCHAR(255) NOT NULL,
    lattitude INTEGER NOT NULL,
    longitude INTEGER NOT NULL
  );

  CREATE TABLE days (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255)
  );

  CREATE TABLE appointments (
    id SERIAL PRIMARY KEY NOT NULL,
    start_time VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    barbershop_id INTEGER REFERENCES barbershops(id) ON DELETE CASCADE,
    day_id INTEGER REFERENCES days(id) ON DELETE CASCADE
  );
  
CREATE TABLE appointmentReviews (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  barbershop_id INTEGER REFERENCES barbershops(id) ON DELETE CASCADE,
  appointment_id INTEGER REFERENCES appointments(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL DEFAULT 0
);
`