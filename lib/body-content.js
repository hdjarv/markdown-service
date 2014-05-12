var getBody = require('raw-body');

/**
 * Middleware that gets the request body as a string and stores it in the req.body property.
 * @param req the express request object
 * @param res the express response object
 * @param next  the express middleware callback
 */
module.exports = function(req, res, next) {
  getBody(req, {
    length: req.headers['content-length'],
    encoding: 'utf8'
  }, function (err, buf) {
    if (err) return next(err);

    req.body = buf;
    next();
  });
};
