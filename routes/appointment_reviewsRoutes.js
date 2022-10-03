const express = require('express');

const { appointment_reviewsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', appointment_reviewsController.create);

// READ - get
// Read All
router.get('/', appointment_reviewsController.getAll);

// Read One
router.get('/:id', appointment_reviewsController.getById);

// UPDATE - put
router.put('/:id', appointment_reviewsController.update);

// DELETE - delete
router.delete('/:id', appointment_reviewsController.remove);

module.exports = router;