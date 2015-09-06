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

var theColor = "#f4858e";
function setComplementary() {
  $("#color-complementary-a").css('background-color', theColor);
  endpointForResponse("complementary?color=" + noHex(theColor), function(json) {
    $("color-complementary-b").css('background-color', json.result);
  });
}

setComplementary();
