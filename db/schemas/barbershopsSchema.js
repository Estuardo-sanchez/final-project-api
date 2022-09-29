module.exports = `
DROP TABLE IF EXISTS barbershops CASCADE;
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
`;