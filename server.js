#!/usr/bin/env node

'use strict';

var express = require('express');
var logger = require('morgan');

var bodyContent = require('./lib/body-content');
var service = require('./routes/service');

var app = express();

app.set('port', process.env.PORT || 3000);
// Set up middleware to use
if (app.get('env') === 'development') {
  app.use(logger('dev'));
}
app.use(bodyContent);

// Set up routes
app.use('/markdown', service);

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message);
});

var server = app.listen(app.get('port'), function () {
  console.log('Markdown service listening on port ' + server.address().port);
});
