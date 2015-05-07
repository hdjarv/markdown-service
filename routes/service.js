'use strict';

var express = require('express');
var fs = require('fs');
var handlebars = require('handlebars');
var marked = require('marked');
var path = require('path');

var templateFilename = path.join(__dirname, '..', 'resources', 'template.html');
var cssFilename = path.join(__dirname, '..', 'resources', 'style.css');
var template = handlebars.compile(fs.readFileSync(templateFilename).toString('utf8'));
var css = fs.readFileSync(cssFilename).toString('utf8');

var router = express.Router();

/*
 Handle POST request for markdown parsing and html generation.
 */
router.post('/', function (req, res) {
  var fullHtml = req.query.fullHtml !== undefined;
  var result = marked(req.body);

  res.type('html');
  res.send(fullHtml ? template({style: css, content: result}) : result);
});

module.exports = router;
