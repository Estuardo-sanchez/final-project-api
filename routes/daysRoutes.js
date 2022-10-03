const express = require('express');

const { DaysController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', DaysController.create);

// READ - get
// Read All
router.get('/', DaysController.getAll);

// Read One
router.get('/:id', DaysController.getById);

// UPDATE - put
router.put('/:id', DaysController.update);

// DELETE - delete
router.delete('/:id', DaysController.remove);

module.exports = router;