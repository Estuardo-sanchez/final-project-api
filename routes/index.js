const express = require('express');

const IndexRoutes = require('./IndexRoutes');
const AuthRoutes = require('./AuthRoutes');
const FruitsRoutes = require('./FruitsRoutes');
const appointment_reviewsRoutes = require('./appointment_reviewsRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const barbershopsRoutes = require('./barbershopsRoutes');
const clientsRoutes = require('./clientsRoutes');
const DaysRoutes = require('./DaysRoutes');
const usersRoutes = require('./usersRoutes');

const router = express.Router();

// RENDERING ROUTES
router.use('/', IndexRoutes);

// AUTHENTICATION ROUTES
router.use('/api/auth', AuthRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/fruits', FruitsRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/appointment_reviews', appointment_reviewsRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/appointments', appointmentRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/barbershops', barbershopsRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/clients', clientsRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/days', DaysRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/users', usersRoutes);

// Catch all route
router.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

module.exports = router;
