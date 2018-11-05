const express = require('express');
const router = express.Router({ mergeParams: true});


router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews/');
});
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:review_id');
});
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;