require('./database/db')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(express());
app.use(express.json());
app.use(morgan());
app.use(cors());

app.use('/',routes);

module.exports = app;

