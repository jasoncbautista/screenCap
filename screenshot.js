/*
    phantomjs screenshot.js http://localhost:8181/ fileName2.png
 *
 **/
var page = require('webpage').create();
 var system = require('system');
var args = system.args;
console.log(args[0]);

var url = args[1];
var outputFile= args[2];

page.viewportSize = { width: 550, height: 240};

page.open(url, function() {
  setTimeout(function(){
	  page.render( outputFile);
    // TODO: XXX: fix this
	  phantom.exit();
  }, 6 *1000);
});
