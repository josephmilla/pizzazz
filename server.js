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
app.get('/api/test', function(req, res, next) {
    console.log('/api/test');
    next();
  }, function (req, res) {
    var resultJSON = {
      'endpoint' : '/api/test',
      'result' : 'Hello, world! Testicular test!'
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Complementary Endpoint
* @param
* @return
**/
app.get('/api/complementary', function(req, res, next) {
    console.log('/api/complementary');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/complementary',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Analogous Endpoint
* @param
* @return
**/
app.get('/api/analogous', function(req, res, next) {
    console.log('/api/analogous');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/analogous',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Triad Endpoint
* @param
* @return
**/
app.get('/api/triad', function(req, res, next) {
    console.log('/api/triad');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/triad',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Split-Complementary Endpoint
* @param
* @return
**/
app.get('/api/split', function(req, res, next) {
    console.log('/api/split');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/split',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Rectangle Endpoint
* @param
* @return
**/
app.get('/api/rectangle', function(req, res, next) {
    console.log('/api/rectangle');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/rectangle',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Square Endpoint
* @param
* @return
**/
app.get('/api/square', function(req, res, next) {
    console.log('/api/square');
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : '/api/square',
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

app.listen(8081);
