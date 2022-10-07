const express = require('express');

const { usersController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', usersController.create);

// READ - get
// Read All
router.get('/', usersController.getAll);

// Read One
router.get('/:id', usersController.getById);

// UPDATE - put
router.put('/:id', usersController.update);

// DELETE - delete
router.delete('/:id', usersController.remove);

module.exports = router;