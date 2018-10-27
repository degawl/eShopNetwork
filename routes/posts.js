const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { 
    postsIndex, 
    postNew, 
    postCreate,
    postShow,
    postEdit
 } = require('../controllers/posts');

router.get('/', asyncErrorHandler(postsIndex));

router.get('/new', postNew);

router.post('/', asyncErrorHandler(postCreate));

router.get('/:id', asyncErrorHandler(postShow));

router.get('/:id/edit', asyncErrorHandler(postEdit));

router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;