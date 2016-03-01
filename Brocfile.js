var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var concatenate = require('broccoli-concat');
var uglifyJs = require('broccoli-uglify-js');

var sassDir = 'client/app/styles';
var appCss = compileSass([sassDir], 'app.scss', 'app.css');
var appJs = concatenate('client/app', {
  inputFiles: ['**/*.js'],
  outputFile: 'app.js'
});

appJs = uglifyJs(appJs, {
  compress: true
});

module.exports = mergeTrees([appCss, appJs]);