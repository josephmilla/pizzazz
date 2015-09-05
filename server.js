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

var endpointIndexTitle = 'Pizzazz API &middot; ';

/**
* Test Endpoint
* @param
* @return
**/
var testEndpoint = '/api/test';
app.get(testEndpoint, function(req, res, next) {
    console.log(testEndpoint);
    next();
  }, function (req, res) {
    var resultJSON = {
      'endpoint' : testEndpoint,
      'result' : 'Hello, world! Testicular test!'
    };

    res.render('index', { title: endpointIndexTitle + testEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Complementary Endpoint
* @param
* @return
**/
var complementaryEndpoint = '/api/complementary';
app.get(complementaryEndpoint, function(req, res, next) {
    console.log(complementaryEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : complementaryEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + complementaryEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Analogous Endpoint
* @param
* @return
**/
var analogousEndpoint = '/api/analogous';
app.get(analogousEndpoint, function(req, res, next) {
    console.log(analogousEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : analogousEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + analogousEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Triad Endpoint
* @param
* @return
**/
var triadEndpoint = '/api/triad';
app.get(triadEndpoint, function(req, res, next) {
    console.log(triadEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : triadEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + triadEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Split-Complementary Endpoint
* @param
* @return
**/
var splitEndpoint = '/api/split';
app.get(splitEndpoint, function(req, res, next) {
    console.log(splitEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : splitEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + splitEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Rectangle Endpoint
* @param
* @return
**/
var rectangleEndpoint = '/api/rectangle';
app.get(rectangleEndpoint, function(req, res, next) {
    console.log(rectangleEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : rectangleEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + rectangleEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Square Endpoint
* @param
* @return
**/
var squareEndpoint = '/api/square';
app.get(squareEndpoint, function(req, res, next) {
    console.log(squareEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = data.color;
    var result = ('000000' + (('0xffffff' ^ 'color').toString(16))).slice(-6);
    var resultJSON = {
      'endpoint' : squareEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.render('index', { title: endpointIndexTitle + squareEndpoint });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

app.listen(8081);
