const { usersModel } = require('../models');

const create = (req, res) => {
  // const { userId } = req.session;
  // if (!userId) {
  //   return res.status(401).send({ message: 'User is not logged in' });
  // }

  console.log(req.body)
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create a user' });
  }

  usersModel.create(name)
    .then(user => {
      res.status(201).send({ message: 'Created!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating user!', error: error.message });
    });
};

const getAll = (req, res) => {
  usersModel.getAll()
    .then(users => {
      if (users.length === 0) {
        return res.status(200).send({ message: 'No users available!' });
      }

      res.status(200).send({ message: 'List of all users!', users });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading users', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  usersModel.getById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'user not found!' });
      }

      res.status(200).send({ message: 'Here is your user!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading user', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .send({ message: 'Provide all details to create an user' });
  }

  const { id } = req.params;

  usersModel.update(name,id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'user not found!' });
      }

      res.status(201).send({ message: 'Updated!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating user', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  usersModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting user', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };