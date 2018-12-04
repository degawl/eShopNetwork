const request = require('supertest'),
      app     = require('../app');

describe('Reviews INDEX GET route', function() {
    it("Allows the user to GET reviews", function(done) {
        request(app).get('/posts/:id/reviews')
            .expect(302, done)
    });
});

describe('Reviews EDIT GET route', function() {
    it("Allows the user to GET reviews/review_id/edit", function(done) {
        request(app).get('/posts/:id/reviews/:review_id/edit')
            .expect(302, done)
    });
});

describe('Reviews PUT route', function() {
    it("Allows the user to PUT reviews/review_id/", function(done) {
        request(app).put('/posts/:id/reviews/:review_id/')
            .expect(302, done)
    });
});