const { DaysModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create a day' });
  }

  DaysModel.create(userId, name, color, emoji)
    .then(days => {
      res.status(201).send({ message: 'Created!', days });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating day', error: error.message });
    });
};

const getAll = (req, res) => {
  DaysModel.getAll()
    .then(days => {
      if (days.length === 0) {
        return res.status(200).send({ message: 'No day available!' });
      }

      res.status(200).send({ message: 'List of all days!', days});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading days', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  DaysModel.getById(id)
    .then(days => {
      if (!days) {
        return res.status(404).send({ message: 'day not found!' });
      }

      res.status(200).send({ message: 'Here is your day!', days });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading day', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update day' });
  }

  const { id } = req.params;

  DaysModel.update(name, color, emoji, id)
    .then(days => {
      if (!days) {
        return res.status(404).send({ message: 'day not found!' });
      }

      res.status(201).send({ message: 'Updated!', days });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating day', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  DaysModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting day', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };