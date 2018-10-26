const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware');
const { getPosts, newPost } = require('../controllers/posts');

router.get('/', errorHandler(getPosts));

router.get('/new', newPost);

router.post('/', (req, res, next) => {
    res.send('CREATE /posts/');
});

router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
});

router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
});

router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;