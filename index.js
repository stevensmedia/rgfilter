var ravensgleaning = require('ravens-gleaning');
var fs = require('fs');
var util = require('util');

var ansi = fs.readFileSync(process.stdin.fd);
var html = ravensgleaning.html(ansi);
fs.writeSync(process.stdout.fd, html);
