const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', 4000);

app.use(cors());
app.use(express.json());

//routes
app.use('/searches', require('./routes/searches'));

module.exports = app;