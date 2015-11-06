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

  // Test 400 Response
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request.get('/foo/bar').expect(404, done);
  });
});
