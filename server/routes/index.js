const data = require('../controllers/data');
const project = require('../controllers/project');

const router = (app) => {
  app.post('/projects/', project.create);
  app.post('/data/', data.create);
  app.put('/projects/', project.update);
  app.put('/data/', data.update);
  app.get('/projects/', project.all);
  app.get('/data/', data.all);
  app.delete('/projects/', project.delete);
  app.delete('/data/', data.delete);
}

module.exports = router;
