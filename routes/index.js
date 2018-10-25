const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { errorHandler } = require('../middleware');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'eShop Network - Home' });
});

router.get('/register', (req, res, next) => {
  res.send('GET /register')
});

router.post('/register', errorHandler(postRegister));

router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

router.post('/login', postLogin);

router.get('/logout', getLogout);

router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
});

router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id  ')
});

router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot')
});

router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot')
});

router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset')
});

router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset')
});

module.exports = router;
