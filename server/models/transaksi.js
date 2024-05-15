const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/conn');
const users = require('./users');

const transaksi = sequelize.define(
  'transaksi',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_pesan: {
      type: DataTypes.DATE,
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: users,
        key: 'id',
      },
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bukti_transfer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'transaksi',
    timestamps: false,
    createdAt: 'tanggal_pesan',
  }
);

transaksi.belongsTo(users, { foreignKey: 'id_user' });

module.exports = transaksi;
