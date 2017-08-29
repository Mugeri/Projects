const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  'name': String,
  'description': String,
  'archived': Boolean,
  'data': Array,
  'count': Number,
});

module.exports = mongoose.model('Project', projectSchema);
