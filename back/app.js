var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var multer = require('multer')

require('dotenv').config();

var bodyParser = require("body-parser");
var mongoose = require('mongoose');

//multer
const multerStorage = multer.diskStorage({
  destination: path.join(__dirname, './public/uploads'),
  filename: (req, file, cb) => {
    const date = Date.now();
    const image = date + path.extname(file.originalname)
    cb(null, image);
  }
})
const upload = multer({ storage: multerStorage });

//here
var usersRouter = require('./routes/users');
var contactsRouter = require('./routes/contacts');
var ratesRouter = require('./routes/rates');
var blogsRouter = require('./routes/blogs')(upload);
var authRouter = require('./routes/auth');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello Maria !!')
});

//here
app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);
app.use('/rates', ratesRouter);
app.use(blogsRouter);
app.use(authRouter);


try {
  mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
} catch (e) {
  console.log(e)
}

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
