module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-newer');

	grunt.initConfig({
		browserify: {
			rgfilter: {
				files: {
					'build/rgfilter': ['index.js']
				},
				options: {
				}
			}
		},
		clean: {
			clean: ['build/']
		}
	});

	var default_tasks = [
		'newer:browserify:rgfilter',
	];

	grunt.registerTask('default', default_tasks);
};
