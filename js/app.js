$(document).foundation();

function getTriad(color) {
  $.ajax({
    url: "index2.html",
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

function setColorIndex(stringHex, index) {
  $("#color-" + index + "-block").css('background-color', stringHex);
  $("#color-" + index + "-text").text(stringHex);
};

function setColorOne(stringHex) {
  setColorIndex(stringHex, "one")
};

function setColorTwo(stringHex) {
  setColorIndex(stringHex, "two")
};

function setColorThree(stringHex) {
  setColorIndex(stringHex, "three")
};



var hexes = [
  "#006688",
  "#009977",
  "#990066",
  "#991100"
];

var hexIndex = 0;

var funcLoop = function() {

  setColorOne(hexes[(hexIndex++) % hexes.length]);
  setColorTwo(hexes[(hexIndex + 1) % hexes.length]);
  setColorThree(hexes[(hexIndex + 2) % hexes.length]);

  setTimeout(funcLoop, 2000);
}

funcLoop();



