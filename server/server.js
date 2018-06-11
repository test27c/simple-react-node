require('dotenv').load();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ServerPortRouter = require('./routes/ServerPortRouter');
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_ATLAS_CLUSTER_URI)
  .then(() => console.log('Database is connected'), err => console.log('Can not connect to database' + err))

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter)

app.listen(PORT, () => {
  console.log('Server is running at port :', PORT);
});