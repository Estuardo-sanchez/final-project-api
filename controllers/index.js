const IndexController = require('./IndexController');
const AuthController = require('./AuthController');
const FruitsController = require('./FruitsController');
const appointment_reviewsController = require('./appointment_reviewsController');
const appointmentController = require('./appointmentController');
const barbershopsController = require('./barbershopsController');
const clientsController = require('./clientsController');
const daysController = require('./daysController');

module.exports = {
  IndexController,
  AuthController,
  FruitsController,
  appointmentController,
  appointment_reviewsController,
  barbershopsController,
  clientsController,
  daysController
};
