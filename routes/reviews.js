const express = require('express');
const router = express.Router({ mergeParams: true});
const { asyncErrorHandler } = require('../middleware');
const{
    reviewCreate,
    reviewUpdate,
    reviewDestroy
} = require('../controllers/reviews');

router.post('/', asyncErrorHandler(reviewCreate));

router.put('/:review_id', asyncErrorHandler(reviewUpdate));
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;