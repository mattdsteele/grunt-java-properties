'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.java_properties = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/noproperties');
    var expected = grunt.file.read('test/expected/noproperties');
    test.equal(actual, expected, 'Files are different');

    test.done();
  },
  single_property: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/singleproperty');
    var expected = grunt.file.read('test/expected/singleproperty');
    test.equal(actual, expected, 'Files are different');

    test.done();
  },
  multiple_files: function(test) {
    test.expect(1);

    var actual = fs.readdirSync('tmp/multiple_files').sort();
    var expected = fs.readdirSync('test/expected/multiple_files').sort();
    test.deepEqual(actual, expected, 'Should work on multiple files');

    test.done();
  },
  multiple_properties: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multipleproperties');
    var expected = grunt.file.read('test/expected/multipleproperties');
    test.equal(actual, expected, 'Files are different');

    test.done();
  },
  custom_property: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/customproperty');
    var expected = grunt.file.read('test/expected/customproperty');
    test.equal(actual, expected, 'Files are different');

    test.done();
  }
};
