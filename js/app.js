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

/**
* API Server GET Request
* @description: Gets a response and waits for the server callback
*/
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

/**
* Helper functions
* @description: Set colors given the color hex
*/
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

/**
* Test Loop
* @description: Cycle through colors
*/
var funcLoop = function() {
  setColorScheme(hexCombinations[hexIndex++ % hexCombinations.length]);
  loopHandle = setTimeout(funcLoop, 3500);
}
funcLoop();

/**
* NoHex
* @description: Removes hashtag
*/
function noHex(string) {
  return string.substring(1, string.length);
}

/**
* Input value
* @description: Get color value from input textbox
*/
var inputValue = "#" + $("#colorHex").val();

var theColor = inputValue ?  inputValue : "#a6daef";
$(".theColor").html("Color selected: " + theColor);

// Update values on enter keydown
$("#colorHex").keydown(function(event) {
	if (event.keyCode==13) {
    // Set the color from input
		inputValue = "#" + $("#colorHex").val();
    console.log(inputValue);
    theColor = inputValue ?  inputValue : "#a6daef";
    $(".theColor").html("Color selected: " + theColor);

    // Stop loop
    clearTimeout(loopHandle);
    endpointForResponse("triad?color=" + noHex(theColor), function(json) {
      // Set every triad to the same value
      setColorIndex([theColor], "one");
      setColorIndex([json.result[1].toString()], "two");
      setColorIndex([json.result[2].toString()], "three");
    });


    setComplementary();
    setAnalogous();
    setTriad();
    setSplit();
    setSquare();
    setMonochromatic();
    setToRGB();
    setToHSV();
	}
});

/**
* Color Combinations
* @description: Ping server, and visualize
*/
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

function setMonochromatic() {
  $(".color-monochromatic-a").css('background-color', theColor);
  endpointForResponse("monochromatic?color=" + noHex(theColor), function(json) {
    $(".color-monochromatic-b").css('background-color', json.result[1].toString());
    $(".color-monochromatic-c").css('background-color', json.result[2].toString());
    $(".color-monochromatic-d").css('background-color', json.result[3].toString());
    $(".color-monochromatic-e").css('background-color', json.result[4].toString());
    $(".color-monochromatic-f").css('background-color', json.result[5].toString());
  });
}

/**
* Color Conversion
* @description: Ping server, and visualize
*/
function setToRGB() {
  $(".color-torgb-a").css('background-color', theColor);
  endpointForResponse("torgb?color=" + noHex(theColor), function(json) {
    $(".color-torgb-info").html(JSON.stringify(json.result, null, 2));
  });
}

function setToHSV() {
  $(".color-tohsv-a").css('background-color', theColor);
  endpointForResponse("tohsv?color=" + noHex(theColor), function(json) {
    $(".color-tohsv-info").html(JSON.stringify(json.result, null, 2));
  });
}

/**
* Color Palettes
* @description: Ping server, and visualize
*/

// Update values on enter keydown
var imageURL = "http://pizzazz.xyz/cutepuppy.jpg";
loadPage("frameImage", imageURL);
$("#imageURL").keydown(function(event) {
	if (event.keyCode==13) {
    // Set the color from input
		imageURL = $("#imageURL").val();
    imageURL = imageURL ? imageURL : "http://pizzazz.xyz/cutepuppy.jpg";
    loadPage("frameImage", imageURL);
    setImage();
	}
});

function setImage() {
  $(".color-image-a").css('background-color', theColor);
  endpointForResponse("image?url=" + imageURL, function(json) {
    $(".color-image-a").css('background-color', json.dominantColor.toString());
  });
}

// Update values on enter keydown
var numRandom = 5;
$("#numRandom").keydown(function(event) {
	if (event.keyCode==13) {
    // Set the color from input
		numRandom = $("#numRandom").val();
    numRandom = numRandom ? numRandom : 5;
    setRandom();
	}
});

function setRandom() {
  $(".color-random-a").css('background-color', theColor);

  endpointForResponse("random?number=" + numRandom, function(json) {

    if(numRandom >= 5) {
      $(".color-random-a").css('background-color', json.result[0].toString());
      $(".color-random-b").css('background-color', json.result[1].toString());
      $(".color-random-c").css('background-color', json.result[2].toString());
      $(".color-random-d").css('background-color', json.result[3].toString());
      $(".color-random-e").css('background-color', json.result[4].toString());
    }

    if(numRandom == 4) {
      $(".color-random-a").css('background-color', json.result[0].toString());
      $(".color-random-b").css('background-color', json.result[1].toString());
      $(".color-random-c").css('background-color', "#FFFFFF");
      $(".color-random-d").css('background-color', json.result[2].toString());
      $(".color-random-e").css('background-color', json.result[3].toString());
    }

    if(numRandom == 3) {
      $(".color-random-a").css('background-color', "#FFFFFF");
      $(".color-random-b").css('background-color', json.result[0].toString());
      $(".color-random-c").css('background-color', json.result[1].toString());
      $(".color-random-d").css('background-color', json.result[2].toString());
      $(".color-random-e").css('background-color', "#FFFFFF");
    }

    if(numRandom == 2) {
      $(".color-random-a").css('background-color', "#FFFFFF");
      $(".color-random-b").css('background-color', json.result[0].toString());
      $(".color-random-c").css('background-color', "#FFFFFF");
      $(".color-random-d").css('background-color', json.result[1].toString());
      $(".color-random-e").css('background-color', "#FFFFFF");
    }

    if(numRandom == 1) {
      $(".color-random-a").css('background-color', "#FFFFFF");
      $(".color-random-b").css('background-color', "#FFFFFF");
      $(".color-random-c").css('background-color', json.result[0].toString());
      $(".color-random-d").css('background-color', "#FFFFFF");
      $(".color-random-e").css('background-color', "#FFFFFF");
    }

  });
}

// Update values on enter keydown
var sentimentText = "I'm so happy happy happy shalalala!";
$("#sentimentText").keydown(function(event) {
	if (event.keyCode==13) {
    // Set the color from input
		sentimentText = $("#sentimentText").val();
    sentimentText = sentimentText ? sentimentText : "I'm so happy happy happy shalalala!";
    setSentiment();
	}
});

function setSentiment() {
  $(".color-sentiment-a").css('background-color', theColor);

  endpointForResponse("sentiment?text=" + sentimentText, function(json) {
    $(".color-sentiment-a").css('background-color', json.result.toString());
  });
}


/**
* loadPage
* @description: Loads given url to an object specified by an id
*/
function loadPage(id, url){
  document.getElementById(id).innerHTML='<object type="text/html" data=' + url + ' height="100%" width="100%"></object>';
}



/**
* Activate Functions
*/
setComplementary();
setAnalogous();
setTriad();
setSplit();
setSquare();
setMonochromatic();
setToRGB();
setToHSV();
setImage();
setRandom();
setSentiment();
