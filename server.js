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

console.log("Starting server now...");
console.log("Server started, waiting for new connection...");

var tinyColor = require('tinycolor2');

/**
* Test Endpoint
* @param: null
* @return: Hello, World!
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

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* ============
* COLOR THEORY
* ============
**/

/**
* Complementary Endpoint
* @description: Complementary -- Colors that are opposite each other on the color wheel are considered to be complementary colors (example: red and green).
* The high contrast of complementary colors creates a vibrant look especially when used at full saturation. This color scheme must be managed well so it is not jarring.
* Complementary colors are tricky to use in large doses, but work well when you want something to stand out.
* Complementary colors are really bad for text.
* @param: Color Hex Code (i.e. #000000)
* @return: Complementary Color Hex Code (i.e. #000000 >> #FFFFFF)
**/
var complementaryEndpoint = '/api/complementary';
app.get(complementaryEndpoint, function(req, res, next) {
    console.log(complementaryEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.complement().toHexString();
    var resultJSON = {
      'endpoint' : complementaryEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no complementary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Analogous Endpoint
* @description: Analogous -- Analogous color schemes use colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs.
* Analogous color schemes are often found in nature and are harmonious and pleasing to the eye.
* Make sure you have enough contrast when choosing an analogous color scheme.
* Choose one color to dominate, a second to support. The third color is used (along with black, white or gray) as an accent.
* @param: Color Hex Code (i.e. #000000)
* @return: Analogous Color Hex Codes
**/
var analogousEndpoint = '/api/analogous';
app.get(analogousEndpoint, function(req, res, next) {
    console.log(analogousEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.analogous();
    var resultJSON = {
      'endpoint' : analogousEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no analogous color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Triad Endpoint
* @description: Triad -- A triadic color scheme uses colors that are evenly spaced around the color wheel.
* Triadic color harmonies tend to be quite vibrant, even if you use pale or unsaturated versions of your hues.
* To use a triadic harmony successfully, the colors should be carefully balanced - let one color dominate and use the two others for accent.
* @param: Color Hex Code (i.e. #000000)
* @return: Triadic Color Hex Codes
**/
var triadEndpoint = '/api/triad';
app.get(triadEndpoint, function(req, res, next) {
    console.log(triadEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.triad();
    var resultJSON = {
      'endpoint' : triadEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no triad color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Split-Complementary Endpoint
* @description: Split-Complementary -- The split-complementary color scheme is a variation of the complementary color scheme. In addition to the base color, it uses the two colors adjacent to its complement.
* This color scheme has the same strong visual contrast as the complementary color scheme, but has less tension.
* The split-complimentary color scheme is often a good choice for beginners, because it is difficult to mess up.
* @param:  Color Hex Code (i.e. #000000)
* @return: Split-Complementary Color Hex Codes
**/
var splitEndpoint = '/api/split';
app.get(splitEndpoint, function(req, res, next) {
    console.log(splitEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.splitcompliment();
    var resultJSON = {
      'endpoint' : splitEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no split-complimentary color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Rectangle Endpoint
* @description: Rectangle -- The rectangle or tetradic color scheme uses four colors arranged into two complementary pairs.
* This rich color scheme offers plenty of possibilities for variation.
* The tetradic color scheme works best if you let one color be dominant.
* You should also pay attention to the balance between warm and cool colors in your design.
* @param: Color Hex Code (i.e. #000000)
* @return: Rectangular Color Hex Codes
**/
var rectangleEndpoint = '/api/rectangle';
app.get(rectangleEndpoint, function(req, res, next) {
    console.log(rectangleEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.tetrad();
    var resultJSON = {
      'endpoint' : rectangleEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no rectangle color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* Square Endpoint
* @description: Square -- The square color scheme is similar to the rectangle, but with all four colors spaced evenly around the color circle.
* The square color scheme works best if you let one color be dominant.
* You should also pay attention to the balance between warm and cool colors in your design.
* @param: Color Hex Code (i.e. #000000)
* @return: Square Color Hex Codes
**/
// var squareEndpoint = '/api/square';
// app.get(squareEndpoint, function(req, res, next) {
//     console.log(squareEndpoint);
//     next();
//   }, function (req, res) {
//     var data = req.query;
//     var color = tinyColor(data.color);
//     var result = color.tetrad();
//     var resultJSON = {
//       'endpoint' : squareEndpoint,
//       'color' : (color ? color : 'Sorry, no color defined'),
//       'result' : ((result && color) ? result : 'Sorry, no square color defined')
//     };
//
//     res.render('index', { title: endpointIndexTitle + squareEndpoint });
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(resultJSON, null, 3));
//     console.log(JSON.stringify(resultJSON, null, 3));
// });

/**
* ================
* COLOR CONVERSION
* ================
**/

/**
* toHSV Endpoint
* @description
* @param
* @return
**/
var toHSVEndpoint = '/api/tohsv';
app.get(toHSVEndpoint, function(req, res, next) {
    console.log(toHSVEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.toHsv();
    var resultJSON = {
      'endpoint' : toHSVEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no HSV color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

/**
* toRGB Endpoint
* @description
* @param
* @return
**/
var toRGBEndpoint = '/api/torgb';
app.get(toRGBEndpoint, function(req, res, next) {
    console.log(toRGBEndpoint);
    next();
  }, function (req, res) {
    var data = req.query;
    var color = tinyColor(data.color);
    var result = color.toRgb();
    var resultJSON = {
      'endpoint' : toRGBEndpoint,
      'color' : (color ? color : 'Sorry, no color defined'),
      'result' : ((result && color) ? result : 'Sorry, no RGB color defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
});

app.listen(8081);
