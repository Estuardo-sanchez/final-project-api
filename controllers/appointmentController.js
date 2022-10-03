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
      .send({ message: 'Provide all details to create a appointment' });
  }

  appointmentModel.create(userId, name, color, emoji)
    .then(appointments => {
      res.status(201).send({ message: 'Created!', appointments });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating appointment', error: error.message });
    });
};

const getAll = (req, res) => {
  appointmentModel.getAll()
    .then(appointments => {
      if (appointments.length === 0) {
        return res.status(200).send({ message: 'No appointments available!' });
      }

      res.status(200).send({ message: 'List of all appointments!', appointments });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading appointments', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  appointmentModel.getById(id)
    .then(appointments => {
      if (!appointments) {
        return res.status(404).send({ message: 'appointment not found!' });
      }

      res.status(200).send({ message: 'Here is your appointment!', appointments });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading appointment', error: error.message });
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
    .then(appointments => {
      if (!appointments) {
        return res.status(404).send({ message: 'Appointment not found!' });
      }

      res.status(201).send({ message: 'Updated!', appointments });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating appointments', error: error.message });
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
        .send({ message: 'Error deleting appointments', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };