const request  = require('supertest'),
      assert   = require('chai').assert,
      createComment = require('../controllers/comments').createComment,
      updateComment = require('../controllers/comments').updateComment,
      deleteComment = require('../controllers/comments').deleteComment,
      app      = require('../app');

describe('Comment', function () {
    it('Should be able to CREATE comment', function() {
        assert.equal(createComment(), 'Success')
    });
});

describe('Comment', function () {
    it('Should be able to UPDATE comment', function() {
        assert.equal(updateComment(), 'Successfully updated')
    });
});

describe('Comment', function () {
    it('Should be able to DELETE comment', function() {
        assert.equal(deleteComment(), 'Successfully Deleted')
    });
});