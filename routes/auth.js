const express = require('express');
const { register, login } = require('../controllers/auth');
const optionalAuth = require('../middlewares/optionalAuth')
const router = express.Router();

// POST: register user
router.post('/register', optionalAuth, register);

// POST: login
router.post('/login', login);

module.exports = router;