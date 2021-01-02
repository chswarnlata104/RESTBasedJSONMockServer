const express = require('express');
const morgan = require('morgan');

const storeRouter = require('./routes/storeRouter');
const storeController = require('./controller/storeController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// app.use('/:store', storeRouter);
app.route('/:store').get(storeController.getAllStores);
app.route('/:store').post(storeController.createStore);
// app.route('/')
app.route('/:store/:id').get(storeController.getStore);
app.route('/:store/:id').patch(storeController.updateStore);
app.route('/:store/:id').put(storeController.getStore);
app.route('/:store/:id').delete(storeController.deleteStore);

module.exports = app;