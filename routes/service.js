var express = require('express');
var marked = require('marked');

var router = express.Router();

/*
  Handle POST request for markdown parsing and html generation.
*/
router.post('/', function(req, res) {
  res.type('html');
  res.send(marked(req.body));
});

module.exports = router;
