const db = require('../model/db.js');

const userController = {};

userController.getFeed = (req, res, next) => {
    next();
};

userController.addUser = (req, res, next) => {};

userController.getUser = (req, res, next) => {};

module.exports = userController;