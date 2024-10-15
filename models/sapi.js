const mongoose = require('mongoose');

const sapiSchema = new mongoose.Schema({
    kandang_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Kandang', required: true },
    kode_sapi: { type: String, required: true, unique: true },
    jenis_kelamin: { type: String, enum: ['JANTAN', 'BETINA'], required: true },
    berat: { type: Number },
    status: { type: String, enum: ['HIDUP', 'MATI'], default: 'HIDUP' },
    tgl_pembelian: { type: Date, default: Date.now },
    harga_beli: { type: Number }
});

module.exports = mongoose.model('Sapi', sapiSchema);
