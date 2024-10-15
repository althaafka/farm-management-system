const ProduksiSusu = require('../models/produksiSusu');
const Kandang = require('../models/kandang');
const Sapi = require('../models/sapi');

// Create Produksi Susu
const createProduksiSusu = async (req, res) => {
    try {
        const { sapi_id, tanggal, jumlah_liter, harga_jual } = req.body;

        if (!jumlah_liter || !harga_jual ) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        if (jumlah_liter < 0 || harga_jual < 0) {
            return res.status(400).json({ message: 'Jumlah liter and harga jual must be positive' });
        }

        const sapi = await Sapi.findById(sapi_id).populate('kandang_id');
        if (!sapi) {
            return res.status(404).json({ message: 'Sapi not found' });
        }

        if (sapi.status !== 'HIDUP' || sapi.jenis_kelamin != "BETINA") {
            return res.status(400).json({ message: 'Milk production can only be recorded for live female cows' });
        }

        const kandang_id = sapi.kandang_id._id;

        // Count live cows on Kandang
        const populasiSapiHidup = await Sapi.countDocuments({
            kandang_id,
            status: 'HIDUP'
        });

        const produksiSusu = new ProduksiSusu({
            sapi_id,
            tanggal,
            jumlah_liter,
            populasi_akhir: populasiSapiHidup,
            harga_jual
        });

        await produksiSusu.save();

        // Change Kandang status to "CLOSING"
        const kandang = await Kandang.findById(kandang_id);
        if (kandang) {
            kandang.status = 'CLOSING';
            await kandang.save();
        }

        res.status(201).json({ message: 'Milk production recorded successfully', produksiSusu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all milk production by sapi_id
const getProduksiSusuBySapi = async (req, res) => {
    try {
        const { sapi_id } = req.params;

        const produksiList = await ProduksiSusu.find({ sapi_id })
            .populate('sapi_id', 'nama');

        res.status(200).json({ produksi: produksiList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all milk production by kandang_id
const getProduksiSusuByKandang = async (req, res) => {
    try {
        const { kandang_id } = req.params;

        const produksiList = await ProduksiSusu.find()
            .populate({
                path: 'sapi_id',
                match: { kandang_id },
                select: 'nama',
            })
            .lean();

        res.status(200).json({ produksi: produksiList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update produksi susu
const updateProduksiSusu = async (req, res) => {
    try {
        const { id } = req.params;

        const produksiSusu = await ProduksiSusu.findById(id);
        if (!produksiSusu) {
            return res.status(404).json({ message: 'Milk production not found' });
        }

        const { jumlah_liter, harga_jual, sapi_id } = req.body;

        if ((jumlah_liter != null && jumlah_liter < 0) || (harga_jual != null && harga_jual < 0)) {
            return res.status(400).json({ message: 'Jumlah liter and harga jual must be a positive number' });
        }

        if (sapi_id) {
            const sapi = await Sapi.findById(sapi_id).populate('kandang_id');
            if (!sapi) {
                return res.status(404).json({ message: 'Sapi not found' });
            }

            if (sapi.status !== 'HIDUP') {
                return res.status(400).json({ message: 'Milk production can only be recorded for live cows' });
            }
        }

        const { populasi_akhir, ...updatedData } = req.body;
        const updatedProduksi = await ProduksiSusu.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ message: 'Milk production updated successfully', produksi: updatedProduksi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete produksi susu
const deleteProduksiSusu = async (req, res) => {
    try {
        const { id } = req.params;
        const peternak_id = req.user.userId;

        const produksiSusu = await ProduksiSusu.findById(id);
        if (!produksiSusu) {
            return res.status(404).json({ message: 'Milk production not found' });
        }

        await ProduksiSusu.findByIdAndDelete(id);
        res.status(200).json({ message: 'Milk production deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduksiSusu,
    getProduksiSusuBySapi,
    getProduksiSusuByKandang,
    updateProduksiSusu,
    deleteProduksiSusu
};
