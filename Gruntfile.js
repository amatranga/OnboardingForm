require('dotenv').config();
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      target: [
        'Gruntfile.js',
        'client/**/*.js',
        'db/**/*.js',
        'server/**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint']);
};
