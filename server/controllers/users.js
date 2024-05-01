const model = require('../models/users');
const controller = {};
const bcrypt = require('bcryptjs');
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

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

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
  try {
    const user = await model.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'Password salah' });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s',
    });
    const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });
    await model.update(
      { remember_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'Email tidak ditemukan' });
  }
};

controller.logout = async function (req, res) {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await users.findAll({
    where: {
      remember_token: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await model.update(
    { remember_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

module.exports = controller;
