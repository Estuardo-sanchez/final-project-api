const { appointmentModel } = require('../models');

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

  appointmentModel.create(userId, name, color, emoji)
    .then(fruit => {
      res.status(201).send({ message: 'Created!', barbershop });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating barbershop', error: error.message });
    });
};

const getAll = (req, res) => {
  appointmentModel.getAll()
    .then(fruits => {
      if (fruits.length === 0) {
        return res.status(200).send({ message: 'No barbershops available!' });
      }

      res.status(200).send({ message: 'List of all barbershops!', barbershop });
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

  appointmentModel.getById(id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Barbershop not found!' });
      }

      res.status(200).send({ message: 'Here is your barbershop!', barbershop });
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
      .send({ message: 'Provide all details to create an appointment' });
  }

  const { id } = req.params;

  appointmentModel.update(name, color, emoji, id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Appointment not found!' });
      }

      res.status(201).send({ message: 'Updated!', appointment });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating appointment', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  appointmentModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting appointment', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };