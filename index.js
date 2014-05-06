var connect = require("connect");
var app;

module.exports = function(port) {
  app = connect();
  return app;
}


