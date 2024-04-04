const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const checkUser = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        res.locals.username = decodedToken.username;
        res.locals.nama = decodedToken.nama;
        res.locals.id = decodedToken.id;
        res.locals.role = decodedToken.role;
        res.locals.email = decodedToken.email;
        res.locals.no_telp = decodedToken.no_telp;
        // console.log(res.locals);
        next();
      }
    });
  } else {
    res.locals.nama = 'user';
    res.locals.id = 0;
    next();
  }
};

function isLogin(req, res, next) {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.TOKEN, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send('token error'); //505
      } else {
        console.log(decodedToken);
        // const role = decodedToken.role;
        // if (role != "mahasiswa") return res.render("eror403");
        next();
      }
    });
  } else {
    res.json({ error: 'login dahulu!' });
  }
}

module.exports = { isLogin, checkUser };
