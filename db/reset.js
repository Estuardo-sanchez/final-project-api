require('dotenv').config();
const { db } = require('./index');

const clientsSchema = require('./schemas/clientsSchema');
const barbershopsSchema = require('./schemas/barbershopsSchema');
const appointmentsSchema = require('./schemas/appointmentsSchema');
const appointment_reviewsSchema = require('./schemas/appointment_reviewsSchema');
const daysSchema = require('./schemas/daysSchema');

const clientsSeeds = require('./seeds/clientsSeeds');
const barbershopsSeeds = require('./seeds/barbershopsSeeds');
const appointmentsSeeds = require('./seeds/appointmentsSeeds');
const appointment_reviewsSeeds = require('./seeds/appointment_reviewsSeeds');
const daysSeeds = require('./seeds/daysSeeds')


db.connect();

const promises = [
  db.query(clientsSchema),
  db.query(barbershopsSchema),
  db.query(appointmentsSchema),
  db.query(appointment_reviewsSchema),
  db.query(daysSchema),
  db.query(clientsSeeds),
  db.query(barbershopsSeeds),
  db.query(appointmentsSeeds),
  db.query(appointment_reviewsSeeds),
  db.query(daysSeeds)
];

Promise.all(promises)
  .then(() => console.log('DB reset completed!'))
  .then(() => db.end())
  .catch(err => console.log('Failed to reset', err));
