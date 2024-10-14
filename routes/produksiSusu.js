const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const {
    createProduksiSusu,
    getProduksiSusuBySapi,
    getProduksiSusuByKandang,
    updateProduksiSusu,
    deleteProduksiSusu
} = require('../controllers/produksiSusu');

// POST: Create produksi susu
router.post('/', authenticate, createProduksiSusu);

// GET: Get all produksi susu for a sapi
router.get('/sapi/:sapi_id', authenticate, getProduksiSusuBySapi);

// GET: Get all produksi susu for a kandang
router.get('/kandang/:kandang_id', authenticate, getProduksiSusuByKandang);

// PUT: Update produksi susu
router.put('/:id', authenticate, updateProduksiSusu);

// DELETE: Delete produksi susu
router.delete('/:id', authenticate, deleteProduksiSusu);

module.exports = router;
