const LaporanHarian = require('../models/laporanHarian');
const Kandang = require('../models/kandang');
const StokProduk = require('../models/stokProduk')

// Create Laporan Harian
const createLaporanHarian = async (req, res) => {
    try {
        const { kandang_id: reqKandangId, id_produk, tanggal, pakan_terpakai, obat_terpakai, deplesi, keterangan } = req.body;
        const peternak_id = req.user.userId;
        
        const inputTanggal = new Date(tanggal);
        const today = new Date();
        if (inputTanggal > today) {
            return res.status(400).json({ message: 'Report date cannot be in the future' });
        }
        
        const produk = await StokProduk.findById(id_produk);
        if (!produk) {
            return res.status(404).json({ message: 'Produk not found' })
        }

        const kandang_id = reqKandangId || produk.kandang_id;
        if (produk.kandang_id.toString() != kandang_id.toString()) {
            return res.status(400).json({ message: 'Produk does not belong to the specified Kandang' });
        }

        const kandang = await Kandang.findById(kandang_id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        if (kandang.status !== 'PRODUKSI') {
            return res.status(400).json({ message: 'Reports can only be created for Kandang in production' });
        }


        const laporan = new LaporanHarian({
            peternak_id,
            kandang_id,
            id_produk,
            tanggal,
            pakan_terpakai,
            obat_terpakai,
            deplesi,
            keterangan
        });

        await laporan.save();
        res.status(201).json({ message: 'Daily report created successfully', laporan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all reports for a specific Kandang
const getLaporanByKandang = async (req, res) => {
    try {
        const { kandang_id } = req.params;

        const laporanList = await LaporanHarian.find({ kandang_id })
            .populate('peternak_id', 'nama')
            .populate('id_produk', 'nama');
        res.status(200).json({ laporan: laporanList });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update laporan harian
const updateLaporanHarian = async (req, res) => {
    try {
        const { id } = req.params;
        const peternak_id = req.user.userId; 

        const laporan = await LaporanHarian.findById(id);
        if (!laporan) {
            return res.status(404).json({ message: 'Daily report not found' });
        }

        if (laporan.peternak_id.toString() !== peternak_id) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        if (req.body.tanggal){
            const inputTanggal = new Date(req.body.tanggal);
            const today = new Date();
            if (inputTanggal > today) {
                return res.status(400).json( { error: 'Invalid or future report date' })
            }
        }

        if (req.body.id_produk || req.body.kandang_id) {
            const id_produk = req.body.id_produk || laporan.id_produk;
            const produk = await StokProduk.findById(id_produk);

            if (!produk) {
                return res.status(404).json({ message: 'Produk not found' })
            }

            const kandang_id = req.body.kandang_id || produk.kandang_id;
            if (produk.kandang_id.toString() != kandang_id.toString()) {
                return res.status(400).json({ message: 'Produk does not belong to the specified Kandang' });
            }
    
            const kandang = await Kandang.findById(kandang_id);
            if (!kandang) {
                return res.status(404).json({ message: 'Kandang not found' });
            }

            req.body.kandang_id = kandang_id;
        }

        const { umur, ...updatedData } = req.body
        const updatedLaporan = await LaporanHarian.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ message: 'Daily report updated successfully', laporan: updatedLaporan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete laporan harian
const deleteLaporanHarian = async (req, res) => {
    try {
        const { id } = req.params;
        const peternak_id = req.user.userId; 

        const laporan = await LaporanHarian.findById(id);
        if (!laporan) {
            return res.status(404).json({ message: 'Daily report not found' });
        }

        if (laporan.peternak_id.toString() !== peternak_id) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        await LaporanHarian.findByIdAndDelete(id);
        res.status(200).json({ message: 'Daily report deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createLaporanHarian,
    getLaporanByKandang,
    updateLaporanHarian,
    deleteLaporanHarian
};
