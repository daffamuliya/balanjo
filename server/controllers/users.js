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
  const username = user.username;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, username, name, email, role });
};

controller.me = async function (req, res) {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Mohon login ke akun anda' });
  }
  const user = await model.findOne({
    attributes: ['uuid', 'name', 'email', 'role', 'username', 'id', 'alamat', 'no_telp', 'alamat', 'password'],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });
  res.status(200).json(user);
};

controller.updatePassword = async function (req, res) {
  const { oldPassword, newPassword, confNewPassword } = req.body;

  try {
    const loggedInUser = await model.findOne({
      where: {
        uuid: req.session.userId,
      },
    });

    if (!loggedInUser) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' });
    }

    const isMatch = await argon2.verify(loggedInUser.password, oldPassword);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Kata sandi lama salah' });
    }

    if (newPassword !== confNewPassword) {
      return res.status(400).json({ msg: 'Password baru dan konfirmasi password tidak cocok' });
    }

    const hashNewPassword = await argon2.hash(newPassword);

    await loggedInUser.update({ password: hashNewPassword });

    res.json({ msg: 'Password berhasil diperbarui' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

controller.logout = async function (req, res) {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: 'Tidak dapat logout' });
    res.status(200).json({ msg: 'Anda telah logout' });
  });
};

module.exports = controller;
