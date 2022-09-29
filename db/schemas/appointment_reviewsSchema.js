module.exports = `
DROP TABLE IF EXISTS appointment_reviews CASCADE;
CREATE TABLE appointment_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  barbershop_id INTEGER REFERENCES barbershops(id) ON DELETE CASCADE,
  appointment_id INTEGER REFERENCES appointments(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL DEFAULT 0
);
`