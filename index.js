var ravensgleaning = require('ravens-gleaning');
var fs = require('fs');

var ansistring = fs.readSync(process.stdin.fd, 100, 0, "utf-8");
var html = ravensgleaning.html(ansistring);
fs.writeSync(process.stdout.fd, html);
