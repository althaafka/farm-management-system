const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const authenticate = require('../middlewares/authenticate');
const {
    createKandang,
    updateKandang,
    deleteKandang,
    addPeternakToKandang,
    removePeternakFromKandang
} = require('../controllers/kandang');

// POST: Add New Kandang
router.post('/', authenticate, authorize("PPL"), createKandang);

// PUT: Update Kandang
router.put('/:id', authenticate, authorize("PPL"), updateKandang);

// DELETE: Delete Kandang
router.delete('/:id', authenticate, authorize("PPL"), deleteKandang);

// PUT: Add Peternak to Kandang
router.put('/:id/add-peternak', authenticate, authorize("PPL"), addPeternakToKandang);

// PUT: Remove Peternak from Kandang
router.put('/:id/remove-peternak', authenticate, authorize("PPL"), removePeternakFromKandang);


module.exports = router;
