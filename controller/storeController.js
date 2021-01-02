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

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


exports.createStore = async (req, res) => {
  try {

    res.status(201).json({
      status: 'success',
      data: {
      }
    });
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



