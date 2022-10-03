const express = require('express');

const { barbershopsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', barbershopsController.create);

// READ - get
// Read All
router.get('/', barbershopsController.getAll);

// Read One
router.get('/:id', barbershopsController.getById);

// UPDATE - put
router.put('/:id', barbershopsController.update);

// DELETE - delete
router.delete('/:id', barbershopsController.remove);

module.exports = router;