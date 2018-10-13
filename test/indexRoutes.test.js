const request = require('supertest'),
      app     = require('../app');

describe('Homepage GET route', function() {
    it("Welcomes the user", function(done) {
        request(app).get('/')
            .expect(200)
            .expect(/eShop Network/, done)
    });
});

describe('Register GET route', function() {
    it("Allows the user to GET register", function(done) {
        request(app).get('/register')
            .expect(200, done)
    });
});

describe('Login GET route', function() {
    it("Allows the user to GET login", function(done) {
        request(app).get('/login')
            .expect(200, done)
    });
});

describe('Profile GET route', function() {
    it("Allows the user to GET profile", function(done) {
        request(app).get('/profile')
            .expect(200, done)
    });
});

describe('Profile/:user_id PUT route', function() {
    it("Allows the user to PUT profile/:user_id", function(done) {
        request(app).put('/profile/:user_id')
            .expect(200, done)
    });
});

describe('Forgot password GET route', function() {
    it("Allows the user to GET forgot", function(done) {
        request(app).get('/forgot')
            .expect(200, done)
    });
});

describe('Forgot password PUT route', function() {
    it("Allows the user to PUT forgot", function(done) {
        request(app).put('/forgot')
            .expect(200, done)
    });
});

describe('Reset password GET route', function() {
    it("Allows the user to GET reset", function(done) {
        request(app).get('/reset/:token')
            .expect(200, done)
    });
});

describe('Reset password PUT route', function() {
    it("Allows the user to PUT reset", function(done) {
        request(app).put('/reset/:token')
            .expect(200, done)
    });
});