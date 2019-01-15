
var assert = require('assert');
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
    it('should return number of charachters in a string', function () {
        assert.equal("Words".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Words".charAt(0), 'W');
    });
    it('should return number of charachters in a string', function () {
        assert.equal("Test".length, 4);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Test".charAt(0), 'T');
    });
    it('should return number of charachters in a string', function () {
        assert.equal("Thing".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Thing".charAt(0), 'T');
    });
});