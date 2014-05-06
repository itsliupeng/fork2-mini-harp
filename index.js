var fs = require("fs");
var connect = require("connect");
var serveStatic = require("serve-static");
var makeJade = require("./lib/processor/jade")
var app;

module.exports = function(root) {
  app = connect()
    .use(function(req, res, next){
      if(req.url == '/current-time') {
        res.end(new Date().toISOString());
      } else {
        next();
      }
    })
    .use(serveStatic(root))
    .use(makeJade(root));

  return app;
}


