const assert = require('chai').assert;
const request = require('supertest'),
      app     = require('../app');

const testComment = {
    body: 'This is a test comment',
    author: 'Devon',
    createdAt: Date.now
}

describe('Test comment body testing', function () {
    it('Should test the body of Test comment data type', function () {
        assert.equal(testComment.body.length, 22);
    });
    it('Should test the body of Test comment data type', function () {
        assert.equal(testComment.body, 'This is a test comment');
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isString(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotNull(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotArray(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotBoolean(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotArray(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotBoolean(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotNaN(testComment.author);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotNull(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotArray(testComment.body);
    });
    it('Should test the body of Test comment datatype', function () {
        assert.isNotNaN(testComment.body);
    });
});

describe('Test comment author testing', function () {
    it('Should test the author of Test comment data type', function () {
        assert.equal(testComment.author.length, 5);
    });
    it('Should test the author of Test comment data type', function () {
        assert.equal(testComment.author, 'Devon');
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isString(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotNull(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotArray(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotBoolean(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotArray(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotBoolean(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotNaN(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotNull(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotArray(testComment.author);
    });
    it('Should test the author of Test comment datatype', function () {
        assert.isNotNaN(testComment.author);
    });
});

describe('Test Comment createdAt testing', function () {
    it('Should test the createdAt of Test comment data type', function () {
        assert.equal(testComment.createdAt, Date.now);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotString(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotNull(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotArray(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotBoolean(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotArray(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotBoolean(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotNaN(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotNull(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotArray(testComment.createdAt);
    });
    it('Should test the createdAt of Test comment datatype', function () {
        assert.isNotNaN(testComment.createdAt);
    });
});