/**
 * Pizzazz Server
 * @author: Joseph Milla
 */

var static = require('node-static');
var fileServer = new static.Server('./');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  }).resume();
}).listen(8080);

var express = require('express');
var app = express();

console.log("Starting server now...");
console.log("Server started, waiting for new connection...");

// tinyColor
var tinyColor = require('tinycolor2');

// colorThief
// var ColorThief = require('./js/color-thief');
// var colorThief = new ColorThief();

// Please
var please = require('pleasejs')

// Sentiment Analysis
var sentiment = require('sentiment');

// Vibrant
var vibrant = require('node-vibrant');

// Webshot
var webshot = require('webshot');

// File Handling
var http = require('http');
var fs = require('fs');
var gm = require('gm').subClass({
  imageMagick: true
});

/**
 * Test Endpoint
 * @param: null
 * @return: Hello, World!
 **/
var testEndpoint = '/api/test';
app.get(testEndpoint, function(req, res, next) {
  console.log(testEndpoint);
  next();
}, function(req, res) {
  var resultJSON = {
    'endpoint': testEndpoint,
    'result': 'Hello, world! Testicular test!'
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
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.complement().toHexString();
  var resultJSON = {
    'endpoint': complementaryEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no complementary color defined')
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
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.analogous().map(function(t) {
    return t.toHexString();
  });
  var resultJSON = {
    'endpoint': analogousEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no analogous color defined')
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
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.triad().map(function(t) {
    return t.toHexString();
  });
  var resultJSON = {
    'endpoint': triadEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no triad color defined')
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
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.splitcomplement().map(function(t) {
    return t.toHexString();
  });
  var resultJSON = {
    'endpoint': splitEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no split-complementary color defined')
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
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.tetrad().map(function(t) {
    return t.toHexString();
  });
  var resultJSON = {
    'endpoint': rectangleEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no rectangle color defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});

/**
 * Monochromatic Endpoint
 * @description: Monochromatic -- Returns the monochromatic color combination given a color
 * @param: Color Hex Code (i.e. #000000)
 * @return: Monochromatic Color Hex Codes
 **/
var monochromaticEndpoint = '/api/monochromatic';
app.get(monochromaticEndpoint, function(req, res, next) {
  console.log(monochromaticEndpoint);
  next();
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.monochromatic().map(function(t) {
    return t.toHexString();
  });
  var resultJSON = {
    'endpoint': monochromaticEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no square color defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});

/**
 * ================
 * COLOR CONVERSION
 * ================
 **/

/**
 * toHSV Endpoint
 * @description: toHSV -- Convert a given color to HSV format
 * @param: Color Hex Code (i.e. #000000)
 * @return: Color in HSV Format
 **/
var toHSVEndpoint = '/api/tohsv';
app.get(toHSVEndpoint, function(req, res, next) {
  console.log(toHSVEndpoint);
  next();
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.toHsv();
  var resultJSON = {
    'endpoint': toHSVEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no HSV color defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});

/**
 * toRGB Endpoint
 * @description toRGB -- Convert a given color to RGB format
 * @param: Color Hex Code (i.e. #000000)
 * @return: Color in RGB Format
 **/
var toRGBEndpoint = '/api/torgb';
app.get(toRGBEndpoint, function(req, res, next) {
  console.log(toRGBEndpoint);
  next();
}, function(req, res) {
  var data = req.query;
  var color = tinyColor(data.color);
  var result = color.toRgb();
  var resultJSON = {
    'endpoint': toRGBEndpoint,
    'color': (color ? color : 'Sorry, no color defined'),
    'result': ((result && color) ? result : 'Sorry, no RGB color defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});


/**
 * ================
 * COLOR PALETTES
 * ================
 **/

/**
 * imageInfo Endpoint
 * @description imageInfo -- Gets the imageInfo and dominant color of a given source image
 * @param: Source Image (i.e. .jpg, .png, etc.)
 * @return: imageInfo JSON, Color in Hex Format (i.e. #000000)
 **/
var imageEndpoint = '/api/image';
app.get(imageEndpoint, function(req, res, next) {
  console.log(imageEndpoint);
  next();
}, function(req, res) {
  var data = req.query;

  // Get imageURL
  var imageURL = data.url;
  console.log(imageURL);

  // Set image path
  var imagePath = 'img/imageFile.jpg';

  // Load image locally
  var imageFile = fs.createWriteStream(imagePath);
  var request = http.get(imageURL, function(response) {
    response.pipe(imageFile);
  });

  // Get imageInfo
  gm(imageURL).identify(function(err, value) {
    console.log('imageInfo: ' + value);
    var imageInfo = value;

    var channelStats = imageInfo["Channel statistics"];
    var redChannelMean = channelStats["Red"]["mean"];
    var greenChannelMean = channelStats["Green"]["mean"];
    var blueChannelMean = channelStats["Blue"]["mean"];
    var dominantColor = tinyColor({ r: redChannelMean, g: greenChannelMean, b: blueChannelMean }).toHexString();

    var resultJSON = {
      'endpoint': imageEndpoint,
      'imageURL': (imageURL ? imageURL : 'Sorry, no imageURL defined'),
      'dominantColor': ((dominantColor && imageInfo && imageURL) ? dominantColor : 'Sorry, no dominantColor defined')
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJSON, null, 3));
    console.log(JSON.stringify(resultJSON, null, 3));
  });
});

/**
 * randomColor Endpoint
 * @description getRandomColor -- Gets the 4 random colors
 * @param: Number of random colors wanted
 * @return: Color in Hex Format (i.e. #000000)
 **/
var randomColorEndpoint = '/api/random';
app.get(randomColorEndpoint, function(req, res, next) {
  console.log(randomColorEndpoint);
  next();
}, function(req, res) {
  var data = req.query;
  var number = data.number;
  var result = please.make_color({
    colors_returned: number
  });

  var resultJSON = {
    'endpoint': randomColorEndpoint,
    'number': (number ? number : 'Sorry, no number of colors defined'),
    'result': ((result && number) ? result : 'Sorry, no colors defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});

/**
 * getSentimentColor Endpoint
 * @description getRandomColor -- Gets the 4 random colors
 * @param: Text to analyze
 * @return: Color in Hex Format (i.e. #000000)
 **/
var getSentimentColor = '/api/sentiment';
app.get(getSentimentColor, function(req, res, next) {
  console.log(getSentimentColor);
  next();
}, function(req, res) {
  var data = req.query;
  var sentimentText = data.text;
  var sentimentScore = sentiment(sentimentText);
  var result = please.make_color({
    golden: false,
    full_random: true
  });

  console.log(result);

  var happyColors = ['‎#00FF00', '#FFFF00', '#FF7F00', '#FFC0DB'];
  var sadColors = ['#0000FF', '#CCCCCC', '#000000', '#964B00'];

  // Darken or Lighten Color based on sentimentScore
  if (sentimentScore.score <= 0) {
    var sadColor = sadColors[Math.floor(Math.random() * sadColors.length)];
    result = tinyColor(sadColor).darken().toString();
    console.log('sentimentScore <= 0: ' + result);
  } else {
    var happyColor = happyColors[Math.floor(Math.random() * happyColors.length)];
    result = tinyColor(happyColor).lighten().toString();
    console.log('sentimentScore > 0: ' + result);
  }

  var resultJSON = {
    'endpoint': getSentimentColor,
    'number': (sentimentScore ? sentimentScore : 'Sorry, no number of colors defined'),
    'result': ((result && sentimentScore) ? result : 'Sorry, no colors defined')
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultJSON, null, 3));
  console.log(JSON.stringify(resultJSON, null, 3));
});

/**
 * analyzeWebsite Endpoint
 * @description analyzeWebsite -- Gets the dominant colors of a website
 * @param: Web URL
 * @return: imageInfo JSON, Color in Hex Format (i.e. #000000)
 **/
var analyzeWebsite = '/api/web';
app.get(analyzeWebsite, function(req, res, next) {
  console.log(analyzeWebsite);
  next();
}, function(req, res) {
  var data = req.query;

  // Get webURL
  var webURL = data.url;
  console.log(webURL);

  // Set image path
  var imagePath = 'img/imageFile.jpg';

  // Load image locally
  // var imageFile = fs.createWriteStream(imagePath);
  // var request = http.get(webURL, function(response) {
  //   response.pipe(imageFile);
  // });

  // Webshot Options
  var options = {
    windowSize: {
      width: 'all',
      height: 'all'
    },
    shotSize: {
      width: 'all',
      height: 'all'
    }
  }

  // Take a screenshot of webpage
  webshot(webURL, imagePath, options, function(err) {
    console.log(err);

    // Get imageInfo
    gm(imagePath).identify(function(err, value) {
      console.log('imageInfo: ' + value);
      var imageInfo = value;

      // Get color palette
      vibrant.from(imagePath).getPalette(function(err, palette) {
        console.log(palette);

        var channelStats = imageInfo["Channel statistics"];
        var redChannelMean = channelStats["Red"]["mean"];
        var greenChannelMean = channelStats["Green"]["mean"];
        var blueChannelMean = channelStats["Blue"]["mean"];
        var dominantColor = tinyColor({ r: redChannelMean, g: greenChannelMean, b: blueChannelMean }).toHexString();


        var colorPalette = [
          palette["Vibrant"]["rgb"] ? tinyColor({ r: palette["Vibrant"]["rgb"][0], g: palette["Vibrant"]["rgb"][1], b: palette["Vibrant"]["rgb"][1] }).toHexString() : palette["Vibrant"]["rgb"],
          palette["Muted"]["rgb"] ? tinyColor({ r: palette["Muted"]["rgb"][0], g: palette["Muted"]["rgb"][1], b: palette["Muted"]["rgb"][1] }).toHexString() : palette["Muted"]["rgb"],
          palette["DarkVibrant"]["rgb"] ? tinyColor({ r: palette["DarkVibrant"]["rgb"][0], g: palette["DarkVibrant"]["rgb"][1], b: palette["DarkVibrant"]["rgb"][1] }).toHexString() : palette["DarkVibrant"]["rgb"],
          palette["DarkMuted"]["rgb"] ? tinyColor({ r: palette["DarkMuted"]["rgb"][0], g: palette["DarkMuted"]["rgb"][1], b: palette["DarkMuted"]["rgb"][1] }).toHexString() : palette["DarkMuted"]["rgb"],
          palette["LightVibrant"]["rgb"] ? tinyColor({ r: palette["LightVibrant"]["rgb"][0], g: palette["LightVibrant"]["rgb"][1], b: palette["LightVibrant"]["rgb"][1] }).toHexString() : palette["LightVibrant"]["rgb"],
          palette["LightMuted"]["rgb"] ? tinyColor({ r: palette["LightMuted"]["rgb"][0], g: palette["LightMuted"]["rgb"][1], b: palette["LightMuted"]["rgb"][1] }).toHexString() : palette["LightMuted"]["rgb"]
        ]

        var resultJSON = {
          'endpoint': analyzeWebsite,
          'webURL': (webURL ? webURL : 'Sorry, no webURL defined'),
          'colorPalette': ((colorPalette && webURL) ? colorPalette : 'Sorry, no colorPalette defined')
        };

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(resultJSON, null, 3));
        console.log(JSON.stringify(resultJSON, null, 3));
      });
    });
  });
});

app.listen(8081);
