const fs = require('fs');

const store = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/store.json`)
);

exports.getAllStores = async (req, res) => {
  try {
    let result = [];
    Object.keys(store).forEach(key => {
      if(key === req.params.store) {
        result = store[key];
      }
    });
    res.status(200).json({
      status: 'success',
      data: result
  });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getStore = async (req, res) => {
  try {
    let result = [];
    let storeDetails = {};
    const id = req.params.id;
    Object.keys(store).forEach(key => {
      if(key === req.params.store) {
        result = store[key];
      }
    });

    for(const res of result) {
      const val = res.id;
      if(val == id) {
        storeDetails = res;
        break;
      }
    }
    res.status(200).json({
      status: 'success',
      data: storeDetails
  });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const entity = req.params.store;
    let result = [];
    Object.keys(store).forEach(key => {
      if(key === req.params.store) {
        result = store[key];
      }
    });
    const id = req.params.id;
    let updatedStore = result.filter(res => res.id != id);
    store[entity] = updatedStore;

    fs.writeFile(
    `${__dirname}/../data/store.json`,
    JSON.stringify(store),
    err => {
      res.status(204).json({
      status: 'success',
      data: null
    });
    }
  );

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


exports.createStore = async (req, res) => {
  try {
  const entity = req.params.store;
  let result = [];
   const id = req.params.id;
    Object.keys(store).forEach(key => {
      if(key === req.params.store) {
        result = store[key];
      }
    });
    const newId = result.length === 0 ? 0 : result[result.length - 1].id + 1;
    const newStore = Object.assign({ id: newId }, req.body);
    result.push(newStore);
    store[entity] = result;
  
    fs.writeFile(
      `${__dirname}/../data/store.json`,
      JSON.stringify(store),
      err => {
        res.status(201).json({
          status: 'success',
          data: {
          tour: newStore
          }
        });
      }
    );

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateStore = async (req, res) => {
  try {

    res.status(200).json({
      status: 'success',
      data: {
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

