const DataSet = require('../models/data');

const DataSetController = {
  create: (req, res) => {
    const dataSet = new DataSet();
    dataSet.name = req.body.name;
    dataSet.data = req.body.data;
    dataSet.projectId = req.body.projectId;

    dataSet.save((err, data) => {
      if (err) return res.status(417).send(err);

      return res.status(201).send({message: 'DataSet created'});
    });
  },

  update: (req, res) => {
    DataSet
    .findById(req.params.id, (err, dataSet) => {
      if (err) {
        return res.status(404);
      }
      dataSet.name = req.body.name;
      dataSet.data = req.body.data;
      dataSet.projectId = req.body.projectId;

      dataSet.save((err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(202).send({
          message: 'Dataset updated successfully!',
        });
      });
    }
  },

  all: (req, res) => {
    DataSet
    .find({})
    .then((err, dataSet) => {
      if (err) return ;

      return res.status(200).send(dataSet);
    })
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
