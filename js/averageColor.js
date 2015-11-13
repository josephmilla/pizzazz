function getAverageColor(img) {
  var canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    rgb = {
      r: 102,
      g: 102,
      b: 102
    }, // Set a base colour as a fallback for non-compliant browsers
    pixelInterval = 5, // Rather than inspect every single pixel in the image inspect every 5th pixel
    count = 0,
    i = -4,
    data, length;

  // Return the base colour for non-compliant browsers
  if (!context) {
    return rgb;
  }

  // Set the height and width of the canvas element to that of the image
  var height = canvas.height = img.naturalHeight || img.offsetHeight || img.height,
    width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

  context.drawImage(img, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    // Catch errors - usually due to cross domain security issues
    alert(e);
    return rgb;
  }

  data = data.data;
  length = data.length;
  while ((i += pixelInterval * 4) < length) {
    count++;
    rgb.r += data[i];
    rgb.g += data[i + 1];
    rgb.b += data[i + 2];
  }

  // Floor the average values to give correct rgb values (ie: round number values)
  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  // Convert to Hex
  var color = tinycolor(rgb);
  if (color.isValid()) {
    return color.toHexString();
  }

  return -1;
}
