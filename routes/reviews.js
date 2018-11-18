const express = require('express');
const router = express.Router({ mergeParams: true});
const { asyncErrorHandler, isReviewAuthor } = require('../middleware');
const{
    reviewCreate,
    reviewUpdate,
    reviewDestroy
} = require('../controllers/reviews');

router.post('/', asyncErrorHandler(reviewCreate));

router.put('/:review_id', isReviewAuthor, asyncErrorHandler(reviewUpdate));

router.delete('/:review_id', isReviewAuthor, asyncErrorHandler(reviewDestroy));

module.exports = router;