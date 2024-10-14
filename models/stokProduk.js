const mongoose = require('mongoose');

const stokProdukSchema = new mongoose.Schema({
    kandang_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Kandang', required: true },
    nama: { type: String, required: true },
    tipe_produk: { 
        type: String, 
        enum: ['OBAT', 'PAKAN'], 
        required: true 
    }, 
    jumlah: { type: Number, required: true },
    satuan: { type: String, required: true },
    harga: { type: Number},
    tgl_masuk: { type: Date, default: Date.now },
    tgl_kedaluwarsa: { type: Date, required: true },
});

module.exports = mongoose.model('StokProduk', stokProdukSchema);
