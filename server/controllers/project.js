const Project = require('../models/project');

const ProjectController = {
  create: (req, res) => {
    const project = new Project();
    project.name = req.body.name;
    project.data = req.body.data;
    project.projectId = req.body.projectId;

    project.save((err, data) => {
      if (err) return res.status(417).send(err);

      return res.status(201).send({message: 'Project created'});
    });
  },

  update: (req, res) => {
    Project
    .findById(req.params.id, (err, project) => {
      if (err) {
        return res.status(404);
      }
      project.name = req.body.name;
      project.data = req.body.data;
      project.projectId = req.body.projectId;

      project.save((err) => {
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
    Project
    .find({})
    .then((err, project) => {
      if (err) return ;

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
  }
}
