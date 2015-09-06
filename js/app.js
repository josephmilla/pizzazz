$(document).foundation();

function getTriad(color) {
  $.ajax({
    url: "http://www.google.com",
    cache: false,
    success: function(html) {
      alert(html);
    },
    error: function(err) {
      console.log(err);
      alert("faff err" + err);
    }
  });
}

function forResponse(url, callback) {
  $.ajax({
    url: url,
    cache: false,
    success: callback,
    error: function(err) {
      console.log(err);
    }
  });
}
function endpointForResponse(url, callback) {
  forResponse("http://pizzazz.xyz/api/" + url, callback);
}

//getTriad();

function setColorIndex(stringHex, index) {
  $("#color-" + index + "-block").css('background-color', stringHex);
  $("#color-" + index + "-text").text(stringHex);
};

//helper functions to set the colors
function setColorOne(stringHex) {
  setColorIndex(stringHex, "one")
};

function setColorTwo(stringHex) {
  setColorIndex(stringHex, "two")
};

function setColorThree(stringHex) {
  setColorIndex(stringHex, "three")
};

function setColorScheme(arrayScheme) {
  setColorOne(arrayScheme[0]);
  setColorTwo(arrayScheme[1]);
  setColorThree(arrayScheme[2]);
}

var hexCombinations = [
  ["#f48b52", "#b1dfd5", "#f5f6fa"],
  ["#f4858e", "#bfe2ca", "#a6daef"],
  ["#676c7f", "#ca8799", "#e1d5bf"]
];
var hexIndex = 0;
var loopHandle;

//test loop to cycle through colors
var funcLoop = function() {
  setColorScheme(hexCombinations[hexIndex++ % hexCombinations.length]);
  loopHandle = setTimeout(funcLoop, 3500);
}
funcLoop();

function noHex(string) {
  return string.substring(1, string.length);
}

var theColor = "#ff69b4";

function setComplementary() {
  $(".color-complementary-a").css('background-color', theColor);
  endpointForResponse("complementary?color=" + noHex(theColor), function(json) {
    $(".color-complementary-b").css('background-color', json.result.toString());
  });
}

function setAnalogous() {
  $(".color-analogous-a").css('background-color', theColor);
  endpointForResponse("analogous?color=" + noHex(theColor), function(json) {
    $(".color-analogous-b").css('background-color', json.result[1].toString());
    $(".color-analogous-c").css('background-color', json.result[2].toString());
    $(".color-analogous-d").css('background-color', json.result[3].toString());
    $(".color-analogous-e").css('background-color', json.result[4].toString());
    $(".color-analogous-f").css('background-color', json.result[5].toString());
  }); 
}

function setTriad() {
  $(".color-triad-a").css('background-color', theColor);
  endpointForResponse("triad?color=" + noHex(theColor), function(json) {
    $(".color-triad-b").css('background-color', json.result[1].toString());
    $(".color-triad-c").css('background-color', json.result[2].toString());
  }); 
}

function setSplit() {
  $(".color-split-a").css('background-color', theColor);
  endpointForResponse("split?color=" + noHex(theColor), function(json) {
    $(".color-split-b").css('background-color', json.result[1].toString());
    $(".color-split-c").css('background-color', json.result[2].toString());
  });   
}

function setSquare() {
  $(".color-rectangle-a").css('background-color', theColor);
  endpointForResponse("rectangle?color=" + noHex(theColor), function(json) {
    $(".color-rectangle-b").css('background-color', json.result[1].toString());
    $(".color-rectangle-c").css('background-color', json.result[2].toString());
    $(".color-rectangle-d").css('background-color', json.result[3].toString());
  });   
}

setComplementary();
setAnalogous();
setTriad();
setSplit();
setSquare();
