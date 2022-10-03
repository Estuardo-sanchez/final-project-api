const express = require('express');

const { daysController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', daysController.create);

// READ - get
// Read All
router.get('/', daysController.getAll);

// Read One
router.get('/:id', daysController.getById);

// UPDATE - put
router.put('/:id', daysController.update);

// DELETE - delete
router.delete('/:id', daysController.remove);

module.exports = router;