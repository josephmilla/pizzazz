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
  ["#acc7dc", "#d6dde3", "#ffffff"],
  ["#f4858e", "#bfe2ca", "#a6daef"],
  ["#676c7f", "#ca8799", "#e1d5bf"]
];
var hexIndex = 0;

//test loop to cycle through colors
var funcLoop = function() {
/*  setColorOne(hexes[(hexIndex++) % hexes.length]);
  setColorTwo(hexes[(hexIndex + 1) % hexes.length]);
  setColorThree(hexes[(hexIndex + 2) % hexes.length]);*/

  setColorScheme(hexCombinations[hexIndex++ % hexCombinations.length]);
  setTimeout(funcLoop, 3500);
}

funcLoop();



