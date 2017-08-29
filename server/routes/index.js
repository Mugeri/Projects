const datasets = require('../controllers/dataSet');
const project = require('../controllers/project');

const router = (app) => {
  app.post('/projects/', project.create);
  app.post('/datasets/', datasets.create);
  app.put('/projects/:id', project.update);
  app.put('/datasets/:id', datasets.update);
  app.get('/projects/', project.all);
  app.get('/datasets/', datasets.all);
  app.delete('/projects/:id', project.delete);
  app.delete('/datasets/:id', datasets.delete);
}

module.exports = router;
