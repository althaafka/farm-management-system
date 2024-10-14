const express = require('express');
const router = express.Router();
const { 
    createLaporanHarian, 
    getLaporanByKandang, 
    updateLaporanHarian, 
    deleteLaporanHarian 
} = require('../controllers/laporanHarian');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

// POST: Create Laporan Harian
router.post('/', authenticate, authorize('PETERNAK'), createLaporanHarian);

// GET: get all reports for a specific Kandang
router.get('/:kandang_id', authenticate, getLaporanByKandang);

// UPDATE: Update Laporan Harian
router.put('/:id', authenticate, authorize('PETERNAK'), updateLaporanHarian);

// DELETE: Laporan Harian
router.delete('/:id', authenticate, authorize('PETERNAK'), deleteLaporanHarian);

module.exports = router;