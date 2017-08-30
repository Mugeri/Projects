const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = mongoose.Schema.Types.Mixed;
const Project = require('./project');

const dataSetSchema = new Schema({
  'name': String,
  'data': Mixed,
  'projectId': {
    type: String,
    ref: "Project"
  },
});

module.exports = mongoose.model('DataSet', dataSetSchema);
