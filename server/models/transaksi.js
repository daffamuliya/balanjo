const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/conn');
const users = require('./users');
const produk = require('./produk');

const transaksi = sequelize.define(
  'transaksi',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    id_produk: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: produk,
        key: 'id',
      },
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
  },
  {
    tableName: 'transaksi',
    timestamps: true,
  }
);

transaksi.belongsTo(produk, { foreignKey: 'id_produk' }); // Menentukan hubungan "belongsTo" antara "transaksi" dan "produk"
transaksi.belongsTo(users, { foreignKey: 'id_user' }); // Menentukan hubungan "belongsTo" antara "transaksi" dan "produk"

module.exports = transaksi;
