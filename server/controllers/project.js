const Project = require('../models/project');
const DataSet = require('../models/dataset');

const ProjectController = {
  create: (req, res) => {
    const project = new Project();
    project.name = req.body.name;
    //remove all white space and turn to array.
    project.data = req.body.data.replace(/\s/g,'').split(",").map(String);
    project.description = req.body.description;
    project.count = (project.data).length;
    project.archived = req.body.archived;

    project.save((err, data) => {
      if (err) return res.status(417).send(err);

      return res.status(201).send({
        message: 'Project created',
        data,
      });
    });
  },

  update: (req, res) => {
    Project
    .findById(req.params.id, (err, project) => {
      if (err) {
        return res.status(404);
      }
      project.name = req.body.name;
      project.data = req.body.data.replace(/\s/g,'').split(",").map(String);
      project.description = req.body.description;
      project.count = (project.data).length;
      project.archived = req.body.archived;

      project.save((err, data) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(202).send({
          message: 'Dataset updated successfully!',
          data,
        });
      });
    });
  },

  all: (req, res) => {
    Project
    .find({})
    .then((project) => {
      return res.status(200).send(project);
    })
    .catch(err => res.status(404).send(err));
  },

  delete: (req, res) => {
    Project
      .findByIdAndRemove(req.params.id)
      .then(project => {
        return res.status(200).send({
          message: 'Delete successfull!',
          project,
        });
      })
      .catch(err => res.status(501).send(err));
  },

  datasets: (req, res) => {
    DataSet
    .find({projectId: req.params.id})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
  },
}
module.exports = ProjectController;
