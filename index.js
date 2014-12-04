'use strict';

var npm = require('npm');

module.exports = install;

function install(dependencies) {
  if (!dependencies) return console.error('Missing dependency list');
  var packages = Object.keys(dependencies);
  console.log('Found %s dependencies', packages.length);

  npm.load(function (err) {
    if (err) return console.error('Problem loading npm:', err);
    packages.forEach(function(pkg) {
      npm.install(pkg + '@' + dependencies[pkg], function(err) {
        if (err) console.error('Installation of %s failed:', pkg, err);
      });
    });
  });
}
