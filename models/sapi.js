const mongoose = require('mongoose');

const sapiSchema = new mongoose.Schema({
    kandang_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Kandang', required: true },
    kode_sapi: { type: String, required: true, unique: true },
    jenis_kelamin: { type: String, enum: ['JANTAN', 'BETINA'], required: true },
    berat: { type: Number, required: true },
    status: { type: String, enum: ['HIDUP', 'MATI'], default: 'HIDUP' },
    tgl_pembelian: { type: Date, required: true },
    harga_beli: { type: Number, required: true }
});

module.exports = mongoose.model('Sapi', sapiSchema);
