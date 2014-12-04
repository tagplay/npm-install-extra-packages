#!/usr/bin/env node
'use strict';

var fs = require('fs');

var nepi = require('./');

var file = process.argv[2];
if (!file) return console.error('Missing configuration-file argument.\n\tusage: npm-extra-package-install dependencies.json');

fs.exists(file, function (exists) {
  if (!exists) return console.error('Configuration-file: "%s" doesn\'t exist.', file);
  fs.readFile(file, 'utf-8', parse);
});

function parse(err, data) {
  if (err) return console.error(err);
  var json = JSON.parse(data);
  nepi(json.dependencies);
}
