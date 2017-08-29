const DataSet = require('../models/dataset');

const jsonify = (string1) => {
  return string1
  .split(',')
  .map(x => x.split(':').map(y => y.trim()))
  .reduce((a, x) => {
    a[x[0]] = x[1];
    return a;
  }, {});
}

const DataSetController = {
  create: (req, res) => {
    const dataSet = new DataSet();
    dataSet.name = req.body.name;
    dataSet.data = jsonify(req.body.data);
    dataSet.projectId = req.body.projectId;

    dataSet.save((err, data) => {
      if (err) return res.status(417).send(err);

      return res.status(201).send({message: 'DataSet created', data});
    });
  },

  update: (req, res) => {
    DataSet
    .findById(req.params.id, (err, dataSet) => {
      if (err) {
        return res.status(404);
      }
      dataSet.name = req.body.name;
      dataSet.data = jsonify(req.body.data);
      dataSet.projectId = req.body.projectId;

      dataSet.save((err, data) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(202).send({
          message: 'Dataset updated successfully!',
          data
        });
      });
    });
  },

  all: (req, res) => {
    DataSet
    .find({})
    .then(dataSet => res.status(200).send(dataSet))
    .catch(err => res.status(404).send(err));
  },

  delete: (req, res) => {
    DataSet
      .findByIdAndRemove(req.params.id)
      .then(dataSet => {
        return res.status(200).send({
          message: 'Delete successfull!',
          dataSet,
        });
      })
      .catch(err => res.status(501).send(err));
  }
}

module.exports = DataSetController;
