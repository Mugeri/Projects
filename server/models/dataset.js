const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = mongoose.Schema.Types.Mixed;

const dataSetSchema = new Schema({
  'name': String,
  'data': Mixed,
  'projectId': String,
});

module.exports = mongoose.model('DataSet', dataSetSchema);
