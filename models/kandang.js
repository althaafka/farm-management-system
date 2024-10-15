const mongoose = require('mongoose');

const kandangSchema = new mongoose.Schema({
    ppl_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    peternak_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    nama_kandang: { type: String, required: true },
    lokasi: { type: String },
    kapasitas: { type: Number, required: true },
    tgl_pembuatan: { type: Date, default: Date.now },
    status: { 
        type: String, 
        enum: ['PRODUKSI', 'REHAT', 'CLOSING'], 
        default: 'REHAT' 
    },
});

module.exports = mongoose.model('Kandang', kandangSchema);
