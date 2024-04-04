const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config();
const multer = require('multer');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS', // Specify allowed HTTP methods
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const auth = require('./routes/auth');
const blog = require('./routes/blog');
const forum = require('./routes/forum');
const marketplace = require('./routes/marketplace');
const kelola = require('./routes/kelola');

const { isLogin, checkUser } = require(`./middleware/authToken`);
const { MulterError } = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('*', checkUser);
app.use('/auth', auth);
app.use('/blog', blog);

app.use('/marketplace', isLogin, marketplace);
app.use('/forum', isLogin, forum);
app.use('/kelola', isLogin, kelola);

//--------------------------------

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/', (req, res) => {
  res.render('eror404');
});

app.listen(port, () => {
  console.log(`Server Sedang Berjalan di http://localhost:${port}`);
});
