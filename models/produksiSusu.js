const mongoose = require('mongoose');

const produksiSusuSchema = new mongoose.Schema({
    sapi_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sapi', required: true },
    tanggal: { type: Date, default: Date.now, required: true },
    jumlah_liter: { type: Number, required: true },
    harga_jual: { type: Number, required: true},
    populasi_akhir: { type: Number, required: true }, // Populasi sapi hidup pada kandang saat panen
});

module.exports = mongoose.model('ProduksiSusu', produksiSusuSchema);