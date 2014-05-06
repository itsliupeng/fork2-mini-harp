var less = require('less');
var fs = require('fs');
var path = require('path');

function makeLess(root) {
  if (!root) throw new TypeError('root path required');

  return function(req, res, next) {
    if (path.extname(req.url) == '.css') {
      var lessFile = path.join(root, req.url.slice(0, -4) + ".less");
      fs.readFile(lessFile, {encoding: "utf8"}, function(err, data) {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          less.render(data, function(err, data) {
            res.end(data);
          })
        }

      });
    } else {
      next();
    }
  }
}

module.exports = makeLess;
