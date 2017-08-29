<<<<<<< b73e5afb8e952d58adf7c3fbf5235ba4eeb9ba45
const app = require('express')();
const router = require('./server/routes');
=======
const app = require('express');
// const router = require('./server/routes');
>>>>>>> setup the base structure
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb://olive:project@ds161793.mlab.com:61793/projects');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

<<<<<<< b73e5afb8e952d58adf7c3fbf5235ba4eeb9ba45
router(app);
=======
// router(app);
>>>>>>> setup the base structure

app.listen('8080', () => {
  console.log();
  console.log(
    ` ${chalk.bold('listening on port 8080')}` );
  console.log();
})

module.exports = app;
