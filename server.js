/**
* Pizzazz Server
* @author: Joseph Milla
*/

var static = require('node-static');
var fileServer = new static.Server('./');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);

var express = require('express');
var app = express();

/**
* Test Endpoint
* @param
* @return
**/
app.get('/api/test', function(req, res) {
    console.log('/api/test');
    next();
  }, function (req, res) {
    res.send('Hello, world! Testicular test!');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Complementary Endpoint
* @param
* @return
**/
app.get('/api/complementary', function(req, res) {
    console.log('/api/complementary');
    next();
  }, function (req, res) {
    res.send('Complementary');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Analogous Endpoint
* @param
* @return
**/
app.get('/api/analogous', function(req, res) {
    console.log('/api/analogous');
    next();
  }, function (req, res) {
    res.send('Analogous');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Triad Endpoint
* @param
* @return
**/
app.get('/api/triad', function(req, res) {
    console.log('/api/triad');
    next();
  }, function (req, res) {
    res.send('Triad');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Split-Complementary Endpoint
* @param
* @return
**/
app.get('/api/split', function(req, res) {
    console.log('/api/split');
    next();
  }, function (req, res) {
    res.send('Split');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Rectangle Endpoint
* @param
* @return
**/
app.get('/api/rectangle', function(req, res) {
    console.log('/api/rectangle');
    next();
  }, function (req, res) {
    res.send('Rectangle');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

/**
* Square Endpoint
* @param
* @return
**/
app.get('/api/square', function(req, res) {
    console.log('/api/square');
    next();
  }, function (req, res) {
    res.send('Square');
    var data = req.query;
    var color = data.color;
    console.log(color);
});

app.listen(8081);
