var fs = require("fs");
var path = require('path');
var jade = require('jade');

function makeJade(root) {
  if (!root) throw new TypeError('root path required');
  return function(req, res, next) {
    if (path.extname(req.url) == '.html') {
      var jadeFile = path.join(root, req.url.slice(0, -5) + ".jade");
      fs.readFile(jadeFile, {encoding: "utf8"}, function(err, data) {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else {
          var options = {pretty: true};
          var html = jade.render(data, options)
          res.writeHead(200, {'Content-Length': html.length, 'Content-Type': 'text/html; charset=UTF-8'})
          res.end(html);
        }
      });
    } else {
      next();
    }
  }
}

module.exports = makeJade;
