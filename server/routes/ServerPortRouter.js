const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');

ServerPortRouter.route('/add').post((req, res) => {
  const serverPort = new ServerPort(req.body);
  serverPort.save()
    .then(serverPort => res.json('Server added successfuly'))
    .catch(err => res.status(400).send('Unable connect to database'))
});

ServerPortRouter.route('/').get((req, res) => {
  ServerPort.find((err, serverports) => {
    if (err) {
      console.log(err);
    } else {
      res.json(serverports)
    }
  })
});

ServerPortRouter.route('/edit/:id').get((req, res) => {
  const id = req.params.id;
  ServerPort.findById(id, (err, serverport) => {
    if (err) {
      console.log(err);
    } else {
      res.json(serverport);
    }
  })
});

ServerPortRouter.route('/update/:id').post((req, res) => {
  ServerPort.findById(req.params.id, (err, serverport) => {
    if (!serverport) {
      return next(new Error('Could not load document'))
    } else {
      // do server updates
      serverport.name = req.body.name;
      serverport.port = req.body.port;

      serverport.save()
        .then(serverport => res.json('update complete'))
        .catch(err => res.status(400).send('unable to update the database'));
    }
  })
});

ServerPortRouter.route('/delete/:id').get((req, res) => {
  ServerPort.findByIdAndRemove({_id: req.params.id}, (err, serverport) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Successfully removed');
    }
  })
});

module.exports = ServerPortRouter;