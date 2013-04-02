/*
 * grunt-java-properties
 * https://github.com/igen261/grunt-java-properties
 *
 * Copyright (c) 2013 Matt Steele
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    java_properties: {
      default_options: {
        options: {
          properties: ['test/fixtures/singleproperty.properties']
        },
        files: {
          'tmp/noproperties' : 'test/fixtures/noproperties'
        },
      },
      single_property: {
        options: {
          properties: ['test/fixtures/singleproperty.properties']
        },
        files: {
          'tmp/singleproperty' : 'test/fixtures/singleproperty'
        }
      },
      multiple_files: {
        options: {
          properties: ['test/fixtures/singleproperty.properties']
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures/',
          src: ['noproperties', 'singleproperty'],
          dest: 'tmp/multiple_files/'
        }]
      },
      multiple_properties: {
        options: {
          properties: [
            'test/fixtures/singleproperty.properties',
            'test/fixtures/secondproperty.properties'
          ],
        },
        files: {
          'tmp/multipleproperties' : 'test/fixtures/multipleproperties'
        }
      },
      custom_property: {
        options: {
          processProperties: function(props) {
            props.set('custom.property', 'Hello');
          }
        },
        files: {
          'tmp/customproperty' : 'test/fixtures/customproperty'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'java_properties', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
