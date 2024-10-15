const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/user');

// GET: Get all users
router.get('/', authenticate, getAllUsers);

// GET: Get a user by ID
router.get('/:id', authenticate, getUserById);

// PUT: Update user
router.put('/', authenticate, updateUser);

// DELETE: Delete user
router.delete('/:id', authenticate, authorize('PPL'), deleteUser);

module.exports = router;
