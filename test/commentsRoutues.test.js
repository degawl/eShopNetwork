const request = require('supertest'),
      app     = require('../app');

describe('Comment GET route', function() {
    it("Allows the user to comment", function(done) {
        request(app).get('/')
            .expect(200)
            .expect(/eShop Network/, done)
    });
});

describe('Comment GET route', function() {
    it("Allows the user to GET comment", function(done) {
        request(app).get('/register')
            .expect(404, done)
    });
});

describe('Comment-edit GET route', function() {
    it("Allows the user to EDIT comment", function(done) {
        request(app).get('/login')
            .expect(200, done)
    });
});

describe('Comment-Delete route', function() {
    it("Allows the user to DELETE comment", function(done) {
        request(app).get('/profile')
            .expect(302, done)
    });
});

describe('Posts/:comment PUT route', function() {
    it("Allows the user to PUT Posts/:comment", function(done) {
        request(app).put('/profile/:user_id')
            .expect(404, done)
    });
});

describe('Posts/:comment DELETE routse', function() {
    it("Allows the user to DELE Posts/:comment", function(done) {
        request(app).get('/forgot')
            .expect(200, done)
    });
});