const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const kandangRoutes = require('./routes/kandang');
const sapiRoutes = require('./routes/sapi')
const stokProdukRoutes = require('./routes/stokProduk')
const laporanHarianRoutes = require('./routes/laporanHarian')
const produksiSusuRoutes = require('./routes/produksiSusu')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/kandang', kandangRoutes);
app.use('/api/sapi', sapiRoutes);
app.use('/api/stok-produk', stokProdukRoutes);
app.use('/api/laporan-harian', laporanHarianRoutes);
app.use('/api/produksi-susu', produksiSusuRoutes);

module.exports = app;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Database connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
