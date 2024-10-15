const Sapi = require('../models/sapi');
const Kandang = require('../models/kandang');

// Add new Sapi to the Kandang
const createSapi = async (req, res) => {
    try {
        const { kode_sapi, jenis_kelamin, berat, tgl_pembelian, harga_beli, kandang_id } = req.body;

        if (!kode_sapi || !jenis_kelamin || !kandang_id ) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if ( (berat != null && berat < 0) || (harga_beli != null && harga_beli < 0)) {
            return res.status(400).json({ message: 'Berat and Harga Beli must be positive values' });
        }

        const kandang = await Kandang.findById(kandang_id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        // Ensure the Kandang capacity is not exceeded
        const jumlahSapi = await Sapi.countDocuments({ kandang_id });
        if (jumlahSapi >= kandang.kapasitas) {
            return res.status(400).json({ message: 'Kandang is at full capacity' });
        }

        const sapi = new Sapi({ kode_sapi, jenis_kelamin, berat, tgl_pembelian, harga_beli, kandang_id });
        await sapi.save();

        res.status(201).json({ message: 'Sapi successfully added', sapi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all Sapi in a specific Kandang
const getSapiByKandang = async (req, res) => {
    try {
        const { kandang_id } = req.params;

        const sapiList = await Sapi.find({ kandang_id });

        res.status(200).json({ sapi: sapiList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Sapi
const updateSapi = async (req, res) => {
    try {
        const { id } = req.params;
        const { berat, harga_beli } = req.body;

        if ( (berat != null && berat < 0) || (harga_beli != null && harga_beli < 0)) {
            return res.status(400).json({ message: 'Berat and Harga Beli must be positive values' });
        }

        const sapi = await Sapi.findByIdAndUpdate(id, req.body, { new: true });

        if (!sapi) {
            return res.status(404).json({ message: 'Sapi not found' });
        }


        if (req.body.kandang_id) {
            const kandang = await Kandang.findById(req.body.kandang_id);
            if (!kandang) {
                return res.status(404).json({ message: 'Kandang not found' });
            }
        }

        res.status(200).json({ message: 'Sapi successfully updated', sapi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove sapi
const deleteSapi = async (req, res) => {
    try {
        const { id } = req.params;

        const sapi = await Sapi.findByIdAndDelete(id);

        if (!sapi) {
            return res.status(404).json({ message: 'Sapi not found' });
        }

        res.status(200).json({ message: 'Sapi successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSapi,
    getSapiByKandang,
    updateSapi,
    deleteSapi
};
