const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  'name': String,
  'description': String,
  'archived': Boolean,
  'data': [{
        type: Schema.Types.ObjectId,
        ref: "DataSet"
    }],
  'count': Number,
});

projectSchema.post('save', function(next) {
  const project  = this;
  project.count = project.data.length;
  next();
});

module.exports = mongoose.model('Project', projectSchema);
