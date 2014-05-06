var connect = require("connect");
var app;

module.exports = function(port) {
  app = connect().use(function(req, res, next){
    if(req.url == '/current-time') {
      res.end(new Date().toISOString());
    } else {
      next();
    }

  });
  return app;
}


