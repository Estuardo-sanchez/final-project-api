const express = require('express');

const { appointmentController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', appointmentController.create);

// READ - get
// Read All
router.get('/', appointmentController.getAll);

// Read One
router.get('/:id', appointmentController.getById);

// UPDATE - put
router.put('/:id', appointmentController.update);

// DELETE - delete
router.delete('/:id', appointmentController.remove);

module.exports = router;