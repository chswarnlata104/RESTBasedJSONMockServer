const express = require('express');
const morgan = require('morgan');

const storeRouter = require('./routes/storeRouter');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// 3) ROUTES
app.use('/', storeRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;