# grunt-java-properties

> Copies files while performing string interpolation from Java properties files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-java-properties --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-java-properties');
```

## The "java_properties" task

### Overview
In your project's Gruntfile, add a section named `java_properties` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  java_properties: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.properties
Type: `Array`
Default value: `[]`

The .properties files to read from

#### options.processProperties
Type: `function`

A callback which provides a single `props` parameter. This can be used to add custom properties.

#### options.postProcessContent
Type: `function`

A callback to be run after properties interpolation has completed. Analagous to the `processContent` function in Grunt's file copy command.

### Usage Examples

See the existing Gruntfile for details.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 Initial commit
