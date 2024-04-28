const model = require('../models/indexmodel');
const { Op, QueryTypes } = require('sequelize');
const sequelize = require('../config/conn');
const controller = {};
const path = require('path');

controller.getAllUser = async (req, res) => {
  try {
    await model.users
      .findAll({
        attributes: ['id', 'username', 'name', 'email', 'no_telp'],
      })
      .then((result) => {
        if (result.length > 0) {
          res.json({ items: result });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.json({ error });
  }
};

controller.getUserById = async (req, res) => {
  try {
    await model.users
      .findOne({
        attributes: ['id', 'username', 'name', 'email', 'no_telp'],
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        if (result) {
          res.json({ items: result });
        } else {
          res.status(404).json({
            message: 'data tidak ada',
            data: [],
          });
        }
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
