const { appointment_reviewsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create a appointment review' });
  }

  appointment_reviewsModel.create(userId, name, color, emoji)
    .then(appointment_reviews => {
      res.status(201).send({ message: 'Created!', appointment_reviews });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating review', error: error.message });
    });
};

const getAll = (req, res) => {
  appointment_reviewsModel.getAll()
    .then(appointment_reviews => {
      if (appointment_reviews.length === 0) {
        return res.status(200).send({ message: 'No reviews available!' });
      }

      res.status(200).send({ message: 'List of all reviews!', appointment_reviews });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading reviews', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  appointment_reviewsModel.getById(id)
    .then(appointment_reviews => {
      if (!appointment_reviews) {
        return res.status(404).send({ message: 'review not found!' });
      }

      res.status(200).send({ message: 'Here is your review!', appointment_reviews });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading review', error: error.message });
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
      .send({ message: 'Provide all details to create a review' });
  }

  const { id } = req.params;

  appointment_reviewsModel.update(name, color, emoji, id)
    .then(appointment_reviews => {
      if (!appointment_reviews) {
        return res.status(404).send({ message: 'review not found!' });
      }

      res.status(201).send({ message: 'Updated!', appointment_reviews });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating review', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  appointment_reviewsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting review', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };