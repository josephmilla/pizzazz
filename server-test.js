/**
 * Pizzazz API Server Tests
 * @author: Joseph Milla
 */

var request = require('supertest');
request = request('http://localhost:8081');
require = require('really-need');

describe('Loading API server at PORT 8081', function() {
  var server = require('./server', {
    bustCache: true
  });

  // Test 400 Response
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request.get('/foo/bar').expect(404, done);
  });
});


/**
 * =======================
 * Color Combination Tests
 * =======================
 */

/**
 * Complementary
 */
describe('GET /api/complementary', function(){
 it('respond with json', function(done){
   request.get('/api/complementary?color=#000000')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200, done);
 })
});

/**
 * Analogous
 */
describe('GET /api/analogous', function(){
 it('respond with json', function(done){
   request.get('/api/analogous?color=#000000')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200, done);
 })
});

/**
 * Triad
 */
describe('GET /api/triad', function(){
  it('respond with json', function(done){
    request.get('/api/triad?color=#000000')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

/**
 * Split-Complementary
 */
describe('GET /api/split', function(){
  it('respond with json', function(done){
    request.get('/api/split?color=#000000')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

/**
 * Rectangle
 */
describe('GET /api/rectangle', function(){
  it('respond with json', function(done){
    request.get('/api/rectangle?color=#000000')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

/**
 * Monochromatic
 */
describe('GET /api/monochromatic', function(){
  it('respond with json', function(done){
    request.get('/api/monochromatic?color=#000000')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});
