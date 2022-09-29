module.exports = `
DROP TABLE IF EXISTS appointments CASCADE;
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  start_time VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  barbershop_id INTEGER REFERENCES barbershops(id) ON DELETE CASCADE,
  day_id INTEGER REFERENCES days(id) ON DELETE CASCADE
);
`;