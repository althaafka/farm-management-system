const StokProduk = require('../models/stokProduk');
const Kandang = require('../models/kandang');

// Add new Stok Produk
const createStokProduk = async (req, res) => {
    try {
        const { nama, tipe_produk, jumlah, satuan, harga, tgl_masuk, tgl_kedaluwarsa, kandang_id } = req.body;

        const kandang = await Kandang.findById(kandang_id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        // Update Kandang status
        if (tipe_produk === 'PAKAN' && kandang.status == 'REHAT') {
            kandang.status = 'PRODUKSI';
            await kandang.save();
        } else if (kandang.status !== 'PRODUKSI') {
            // If the Kandang is not in PRODUKSI status, reject the request
            return res.status(400).json({ message: 'Cannot add stock. Kandang is not in production' });
        }

        const stokProduk = new StokProduk({ nama, tipe_produk, jumlah, satuan, harga, tgl_masuk, tgl_kedaluwarsa, kandang_id });
        await stokProduk.save();

        res.status(201).json({ message: 'Product stock successfully added', stokProduk });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Stok Produk in a specific Kandang
const getStokByKandang = async (req, res) => {
    try {
        const { kandang_id } = req.params;

        const stokList = await StokProduk.find({ kandang_id });

        res.status(200).json({ stok: stokList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Stok Produk
const updateStokProduk = async (req, res) => {
    try {
        const { id } = req.params;

        const stokProduk = await StokProduk.findByIdAndUpdate(id, req.body, { new: true });

        if (!stokProduk) {
            return res.status(404).json({ message: 'Product stock not found' });
        }

        res.status(200).json({ message: 'Product stock successfully updated', stokProduk });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Remove stok produk
const deleteStokProduk = async (req, res) => {
    try {
        const { id } = req.params;

        const stokProduk = await StokProduk.findByIdAndDelete(id);

        if (!stokProduk) {
            return res.status(404).json({ message: 'Product stock not found' });
        }

        res.status(200).json({ message: 'Product stock successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStokProduk,
    getStokByKandang,
    updateStokProduk,
    deleteStokProduk
};
