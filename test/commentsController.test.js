const request = require('supertest'),
      app     = require('../app');

describe('Default', function() {
    it("Checks if testing works", function(done) {
        request(app).get('/')
            .expect(200)
            .expect(/eShop Network/, done)
    });
});