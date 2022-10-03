const { barbershopsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create a barbershop' });
  }

  barbershopsModel.create(userId, name, color, emoji)
    .then(fruit => {
      res.status(201).send({ message: 'Created!', barbershops });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating barbershop', error: error.message });
    });
};

const getAll = (req, res) => {
  barbershopsModel.getAll()
    .then(fruits => {
      if (fruits.length === 0) {
        return res.status(200).send({ message: 'No barbershops available!' });
      }

      res.status(200).send({ message: 'List of all barbershops!', barbershops });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading barbershops', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  barbershopsModel.getById(id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Barbershop not found!' });
      }

      res.status(200).send({ message: 'Here is your barbershop!', barbershops });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading barbershop', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a barbershop' });
  }

  const { id } = req.params;

  barbershopsModel.update(name, color, emoji, id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Barbershop not found!' });
      }

      res.status(201).send({ message: 'Updated!', barbershops });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating barbershop', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  barbershopsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting barbershop', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
