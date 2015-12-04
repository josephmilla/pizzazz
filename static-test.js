/**
 * Pizzazz Static Server Tests
 * @author: Joseph Milla
 */

var request = require('supertest');
request = request('http://localhost:8080');
require = require('really-need');

describe('Loading static server at PORT 8080', function() {
  var server = require('./server', {
    bustCache: true
  });

  // Test 200 Response
  it('responds to /', function testSlash(done) {
    request.get('/').expect(200, done);
  });

  it('responds to /#', function testHash(done) {
    request.get('/#').expect(200, done);
  });

  it('responds to /#color-combination', function testColorCombination(done) {
    request.get('/#color-combination').expect(200, done);
  });

  it('responds to /#analogous', function testAnalogous(done) {
    request.get('/#analogous').expect(200, done);
  });

  it('responds to /#triad', function testTriad(done) {
    request.get('/#triad').expect(200, done);
  });

  it('responds to /#split', function testSplit(done) {
    request.get('/#split').expect(200, done);
  });

  it('responds to /#rectangle', function testRectangle(done) {
    request.get('/#rectangle').expect(200, done);
  });

  it('responds to /#monochromatic', function testMonochromatic(done) {
    request.get('/#monochromatic').expect(200, done);
  });

  it('responds to /#color-conversion', function testColorConversion(done) {
    request.get('/#color-conversion').expect(200, done);
  });

  it('responds to /#toHSV', function testToHSV(done) {
    request.get('/#toHSV').expect(200, done);
  });

  it('responds to /#toRGB', function testToRGB(done) {
    request.get('/#toRGB').expect(200, done);
  });

  it('responds to /#color-palettes', function testColorPalettes(done) {
    request.get('/#color-palettes').expect(200, done);
  });

  it('responds to /#random', function testRandom(done) {
    request.get('/#random').expect(200, done);
  });

  it('responds to /#image', function testImage(done) {
    request.get('/#image').expect(200, done);
  });

  it('responds to /#sentiment', function testSentiment(done) {
    request.get('/#sentiment').expect(200, done);
  });

  it('responds to /#web', function testWeb(done) {
    request.get('/#web').expect(200, done);
  });


  // Test 400 Response
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request.get('/foo/bar').expect(404, done);
  });

  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request.get('/asldjklasjdlkasjdkl').expect(404, done);
  });
});
