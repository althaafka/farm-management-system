const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['PPL', 'PETERNAK'], required: true },
    no_telp: { type: String, required: true },
    alamat: { type: String },
});

module.exports = mongoose.model('User', userSchema);
