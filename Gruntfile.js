//grunt tutorial: https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt

module.exports = function(grunt) {
  grunt.initConfig({
    // getting config info from package.json
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      build: ['Gruntfile.js', 'client/**/**/*.js']
    }
  });

  //tasks:
  grunt.registerTask('default', ['jshint']);

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
