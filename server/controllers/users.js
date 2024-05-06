const model = require('../models/users');
const controller = {};
const bcrypt = require('bcryptjs');
const argon2 = require('argon2');
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN, { expiresIn: '1d' });
}

controller.tampilregister = async function (req, res) {
  res.render('register');
};

controller.register = async function (req, res) {
  const { name, username, password, confPassword, email, no_telp } = req.body;

  try {
    if (password !== confPassword) {
      return res.status(400).json({ msg: 'Password dan Confirm Password tidak cocok' });
    }

    const usernameExist = await model.findOne({ where: { username: username } });
    if (usernameExist) {
      return res.status(400).json({ msg: 'Username sudah dipakai' });
    }

    const emailExist = await model.findOne({ where: { email: email } });
    if (emailExist) {
      return res.status(400).json({ msg: 'Email sudah terdaftar' });
    }

    const hashPassword = await argon2.hash(password);

    const role = 'User';
    const alamat = 'Alamat belum dilengkapi';

    await model.create({
      name: name,
      username: username,
      password: hashPassword,
      role: role,
      email: email,
      no_telp: no_telp,
      alamat: alamat,
    });

    res.json({ msg: 'Register Berhasil' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

controller.tampillogin = async function (req, res) {
  const token = req.cookies.token;
  if (token) return res.redirect('/');
  res.render('login');
};

controller.login = async function (req, res) {
  const user = await model.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: 'Wrong Password' });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

controller.me = async function (req, res) {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Mohon login ke akun anda' });
  }
  const user = await model.findOne({
    attributes: ['uuid', 'name', 'email', 'role'],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });
  res.status(200).json(user);
};

controller.logout = async function (req, res) {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: 'Tidak dapat logout' });
    res.status(200).json({ msg: 'Anda telah logout' });
  });
};

module.exports = controller;
