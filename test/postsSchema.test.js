const assert = require('chai').assert;
const postsController = require('../controllers/posts');
const app             = require('../app');

const testPost = {
    title: 'Test Post',
	description: 'This is a post made for unit-testing.',
	price: 123,
	condition: 'Poor',
	location: 'Tallinn',
	category: 'Cars',
	coordinates: {
        lat: 26.54,
        lng: 25.34
	},
	image: 'AAS23442f33',
	comments: [],
	author: 'Devon',
	createdAt: Date.now
}

describe('Test Post Title Data testing', function () {
    it('Should test the title of Test Post data type', function () {
        assert.equal(testPost.title.length, 9);
    });
    it('Should test the title of Test Post datatype', function () {
        assert.isString(testPost.title);
    });
    it('Should test the title of Test Post datatype', function () {
        assert.isNotNull(testPost.title);
    });
    it('Should test the title of Test Post datatype', function () {
        assert.isNotArray(testPost.title);
    });
    it('Should test the title of Test Post datatype', function () {
        assert.isNotNaN(testPost.title);
    });
});

describe('Test Post Description Data testing', function () {
    it('Should test the description of Test Post data type', function () {
        assert.equal(testPost.description.length, 37);
    });
    it('Should test the description of Test Post datatype', function () {
        assert.isString(testPost.description);
    });
    it('Should test the description of Test Post datatype', function () {
        assert.isNotNull(testPost.description);
    });
    it('Should test the description of Test Post datatype', function () {
        assert.isNotArray(testPost.description);
    });
    it('Should test the description of Test Post datatype', function () {
        assert.isNotNaN(testPost.description);
    });
});

describe('Test Post Price testing', function () {
    it('Should test the price of Test Post data type', function () {
        assert.equal(testPost.price, 123);
    });
    it('Should test the price of Test Post datatype', function () {
        assert.isNumber(testPost.price);
    });
    it('Should test the price of Test Post datatype', function () {
        assert.isNotNull(testPost.price);
    });
    it('Should test the price of Test Post datatype', function () {
        assert.isNotArray(testPost.price);
    });
    it('Should test the price of Test Post datatype', function () {
        assert.isNotNaN(testPost.price);
    });
});

describe('Test Post condition testing', function () {
    it('Should test the condition of Test Post data type', function () {
        assert.equal(testPost.condition.length, 4);
    });
    it('Should test the condition of Test Post datatype', function () {
        assert.isString(testPost.condition);
    });
    it('Should test the condition of Test Post datatype', function () {
        assert.isNotNull(testPost.condition);
    });
    it('Should test the condition of Test Post datatype', function () {
        assert.isNotArray(testPost.condition);
    });
    it('Should test the condition of Test Post datatype', function () {
        assert.isNotNaN(testPost.condition);
    });
});

describe('Test Post category testing', function () {
    it('Should test the category of Test Post data type', function () {
        assert.equal(testPost.category.length, 4);
    });
    it('Should test the category of Test Post data type', function () {
        assert.equal(testPost.category, 'Cars');
    });
    it('Should test the category of Test Post datatype', function () {
        assert.isString(testPost.category);
    });
    it('Should test the category of Test Post datatype', function () {
        assert.isNotNull(testPost.category);
    });
    it('Should test the category of Test Post datatype', function () {
        assert.isNotArray(testPost.category);
    });
    it('Should test the category of Test Post datatype', function () {
        assert.isNotNaN(testPost.category);
    });
});


describe('Test Post coordinate testing', function () {
    it('Should test the coordinates of Test Post data type', function () {
        assert.equal(testPost.coordinates.lat, 26.54);
    });
    it('Should test the coordinates of Test Post data type', function () {
        assert.equal(testPost.coordinates.lng, 25.34);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotString(testPost.coordinates.lng);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotString(testPost.coordinates.lat);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotArray(testPost.coordinates.lat);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotBoolean(testPost.coordinates.lat);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotFalse(testPost.coordinates.lat);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotFunction(testPost.coordinates.lat);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNull(testPost.coordinates.lat);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotArray(testPost.coordinates.lat);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNaN(testPost.coordinates.lat);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotArray(testPost.coordinates.lng);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotBoolean(testPost.coordinates.lng);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotFalse(testPost.coordinates.lng);
    });
    it('Should test the coordinates of Test Post datatype', function () {
        assert.isNotFunction(testPost.coordinates.lng);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNull(testPost.coordinates.lng);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotArray(testPost.coordinates.lng);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNaN(testPost.coordinates.lng);
    });
});

describe('Test Post Coordinate location testing', function () {
    it('Should test the coordinates of Test Post data type', function () {
        assert.equal(testPost.location.length, 7);
    });
    it('Should test the location of Test Post data type', function () {
        assert.equal(testPost.location, 'Tallinn');
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isString(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotArray(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotBoolean(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotEmpty(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotFalse(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotFunction(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNumber(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNull(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotArray(testPost.location);
    });
    it('Should test the location of Test Post datatype', function () {
        assert.isNotNaN(testPost.location);
    });
});

describe('Test Post Image testing', function () {
    it('Should test the image of Test Post data type', function () {
        assert.equal(testPost.image.length, 11);
    });
    it('Should test the image of Test Post data type', function () {
        assert.equal(testPost.image, 'AAS23442f33');
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isString(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotNull(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotArray(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotBoolean(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotArray(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotBoolean(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotNaN(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotNull(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotArray(testPost.image);
    });
    it('Should test the image of Test Post datatype', function () {
        assert.isNotNaN(testPost.image);
    });
});

describe('Test Post Comments testing', function () {
    it('Should test the comments of Test Post data type', function () {
        assert.isArray(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isNotString(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isNotFalse(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isNotNaN(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isNotNaN(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isNotFunction(testPost.comments);
    });
    it('Should test the comments of Test Post datatype', function () {
        assert.isArray(testPost.comments);
    });
});