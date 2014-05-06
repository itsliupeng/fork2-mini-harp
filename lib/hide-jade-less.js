var path = require('path');

module.exports = function hideJadeLess() {
  return function(req, res, next) {
    var affix = path.extname(req.url);
    if (affix == ".jade" || affix == ".less") {
      res.statusCode = 404;
      res.end();
    } else {
      next();
    }
  }
}
