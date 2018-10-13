const request = require('supertest'),
      app     = require('../app');

describe('Posts GET route', function() {
    it("Allows the user to GET posts", function(done) {
        request(app).get('/posts')
            .expect(200, done)
    });
});

describe('Posts/new GET route', function() {
    it("Allows the user to GET posts/new", function(done) {
        request(app).get('/posts/new')
            .expect(200, done)
    });
});

describe('Posts/:id GET route', function() {
    it("Allows the user to GET posts/:id", function(done) {
        request(app).get('/posts/:id')
            .expect(200, done)
    });
});

describe('Posts/:id/edit GET route', function() {
    it("Allows the user to GET posts/:id/edit", function(done) {
        request(app).get('/posts/:id/edit')
            .expect(200, done)
    });
});

describe('Posts/:id PUT route', function() {
    it("Allows the user to PUT posts/:id", function(done) {
        request(app).put('/posts/:id')
            .expect(200, done)
    });
});

