const StokProduk = require('../models/stokProduk');
const Kandang = require('../models/kandang');

// Add new Stok Produk
const createStokProduk = async (req, res) => {
    try {
        const user_id = req.user.userId
        const user_role = req.user.role
        const { nama, tipe_produk, jumlah, satuan, harga, tgl_masuk, tgl_kedaluwarsa, kandang_id } = req.body;

        if (!nama || !tipe_produk || jumlah == null || !satuan || !tgl_kedaluwarsa || !kandang_id) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        if (jumlah < 0 || (harga != null && harga < 0)) {
            return res.status(400).json({ message: 'Jumlah and Harga must be positive values' });
        }

        const kandang = await Kandang.findById(kandang_id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        if ( user_role == "PETERNAK" && !kandang.peternak_ids.includes(user_id)) {
            return res.status(403).json({ message: 'You are not assigned to this Kandang' });
        }

        if ( user_role == "PPL" && kandang.ppl_id != user_id ) {
            return res.status(403).json({ message: 'You are not assigned to this Kandang' });
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
        res.status(500).json({ error: error.message });
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
        const user_id = req.user.userId;
        const user_role = req.user.role;
        const { id } = req.params;
        const { jumlah, harga } = req.body;

        if ((jumlah != null && jumlah < 0) || (harga != null && harga < 0)) {
            return res.status(400).json({ message: 'Jumlah and Harga must be positive values' });
        }

        const stokProduk = await StokProduk.findById(id);
        if (!stokProduk) {
            return res.status(404).json({ message: 'Product stock not found' });
        }

        const kandang = await Kandang.findById(stokProduk.kandang_id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        // Validasi akses berdasarkan role
        if (user_role === 'PETERNAK' && !kandang.peternak_ids.includes(user_id)) {
            return res.status(403).json({ message: 'You are not authorized to update stock for this Kandang' });
        }

        if (user_role === 'PPL' && kandang.ppl_id.toString() !== user_id) {
            return res.status(403).json({ message: 'You are not authorized to update stock for this Kandang' });
        }

        const updatedStokProduk = await StokProduk.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Product stock successfully updated', stokProduk: updatedStokProduk });
    } catch (error) {
        res.status(500).json({ error: error.message });
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
