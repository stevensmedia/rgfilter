module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-chmod');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		browserify: {
			rgfilter: {
				files: {
					'build/rgfilter': ['index.js']
				},
				options: {
					node: true
				}
			}
		},
		chmod: {
			rgfilter: {
				options: {
					mode: '755',
				},
				src: ['build/rgfilter']
			}
		},
		clean: {
			clean: ['build/']
		}
	});

	grunt.registerTask('header', function() {
		var fs = require('fs');
		var rgfilter = fs.readFileSync('build/rgfilter');
		var out = "#! /usr/bin/env node\n\n"  + rgfilter
		fs.writeFileSync('build/rgfilter', out);
		grunt.log.write('Prepended header to build/rgfilter');
	});

	grunt.registerTask('browserify', function() {
		var execSync = require('child_process').execSync;
		grunt.log.write(execSync('`npm bin`/browserify --node -o build/rgfilter -e index.js'));
	});

	var default_tasks = [
		'browserify',
		'chmod:rgfilter',
		'header'
	];

	grunt.registerTask('default', default_tasks);
};
