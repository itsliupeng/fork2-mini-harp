#!/usr/bin/env node

var parseArgs = require("minimist");
var createMiniHarp = require("../index");

var argv = parseArgs(process.argv.slice(2));
var root = argv._[0] || process.cwd();

var app = createMiniHarp(root);

if (argv.port) {
  app.listen(parseInt(argv.port));
  console.log("Starting mini-harp on http://localhost:" + argv.port);
} else {
  app.listen(4000);
  console.log("Starting mini-harp on http://localhost:4000");
}



