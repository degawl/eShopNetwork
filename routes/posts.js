const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({'dest': 'uploads/'});
const { asyncErrorHandler } = require('../middleware');
const { 
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDestroy
} = require('../controllers/posts');

router.get('/', asyncErrorHandler(postIndex));

router.get('/new', postNew);

router.post('/', upload.array('images', 4), asyncErrorHandler(postCreate));

router.get('/:id', asyncErrorHandler(postShow));

router.get('/:id/edit', asyncErrorHandler(postEdit));

router.put('/:id', asyncErrorHandler(postUpdate));

router.delete('/:id', asyncErrorHandler(postDestroy));


module.exports = router;
