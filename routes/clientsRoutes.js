const express = require('express');

const { clientsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', clientsController.create);

// READ - get
// Read All
router.get('/', clientsController.getAll);

// Read One
router.get('/:id', clientsController.getById);

// UPDATE - put
router.put('/:id', clientsController.update);

// DELETE - delete
router.delete('/:id', clientsController.remove);

module.exports = router;