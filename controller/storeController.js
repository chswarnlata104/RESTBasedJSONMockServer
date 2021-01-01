const fs = require('fs');

const store = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/store.json`)
);


exports.getAllStores = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        store
      }
  });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
