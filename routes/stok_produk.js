const express = require('express');
const router = express.Router();
const {
    createStokProduk,
    getStokByKandang,
    updateStokProduk,
    deleteStokProduk
} = require('../controllers/stok_produk');
const authenticate = require('../middlewares/authenticate');

// Add new Stok Produk
router.post('/', authenticate, createStokProduk);

// GET: Get all Stok Produk in a specific Kandang
router.get('/:kandang_id', getStokByKandang);

// PUT: Update Stok Produk
router.put('/:id', authenticate, updateStokProduk);

// DELETE: Remove stok produk
router.delete('/:id', authenticate, deleteStokProduk);

module.exports = router;