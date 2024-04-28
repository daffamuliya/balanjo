const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/conn');
const users = require('./users');

const order_detail = sequelize.define(
  'order_detail',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: users,
        key: 'id',
      },
    },

    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: 'order_detail',
    timestamps: true,
  }
);

module.exports = order_detail;
