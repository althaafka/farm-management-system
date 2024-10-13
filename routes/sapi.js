const express = require('express');
const router = express.Router();
const {
    createSapi,
    getSapiByKandang,
    updateSapi,
    deleteSapi
} = require('../controllers/sapi');
const authenticate = require('../middlewares/authenticate');

// POST: Add Sapi to Kandang
router.post('/', authenticate, createSapi);

// GET: All sapi in a Kandang
router.get('/:kandang_id', getSapiByKandang);

// PUT: Update Sapi
router.put('/:id', authenticate, updateSapi);

// DELETE: Remove Sapi
router.delete('/:id', authenticate, deleteSapi);

module.exports = router;