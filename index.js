var ravensgleaning = require('ravens-gleaning');
var fs = require('fs');

try {
	var ansi = fs.readFileSync(process.stdin.fd);
} catch(err) {
	if(err.message.match('EAGAIN')) {
		return;
	}
	throw(err);
}
var html = ravensgleaning.html(ansi);
fs.writeSync(process.stdout.fd, html);
