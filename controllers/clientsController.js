const { clientsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create a account' });
  }

  clientsModel.create(userId, name, color, emoji)
    .then(clients => {
      res.status(201).send({ message: 'Created!', clients });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating account', error: error.message });
    });
};

const getAll = (req, res) => {
  clientsModel.getAll()
    .then(clients => {
      if (clients.length === 0) {
        return res.status(200).send({ message: 'No account available!' });
      }

      res.status(200).send({ message: 'List of all clients!', clients });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading clients', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  clientsModel.getById(id)
    .then(clients => {
      if (!clients) {
        return res.status(404).send({ message: 'account not found!' });
      }

      res.status(200).send({ message: 'Here is your account!', clients });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading account', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update account' });
  }

  const { id } = req.params;

  clientsModel.update(name, color, emoji, id)
    .then(clients => {
      if (!clients) {
        return res.status(404).send({ message: 'Account not found!' });
      }

      res.status(201).send({ message: 'Updated!', clients });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating account', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  clientsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting account', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };