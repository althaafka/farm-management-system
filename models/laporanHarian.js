const mongoose = require('mongoose');
const StokProduk = require('./stokProduk');

const laporanHarianSchema = new mongoose.Schema({
    peternak_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    kandang_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Kandang', required: true },
    id_produk: { type: mongoose.Schema.Types.ObjectId, ref: 'StokProduk', required: true },
    tanggal: { type: Date, default: Date.now, required: true },
    umur: { type: Number }, // day
    pakan_terpakai: { type: Number, default: 0, required: true },
    obat_terpakai: { type: Number, default: 0, required: true },
    deplesi: { type: Number, default: 0, required: true },
    keterangan: { type: String, required: false },
});

const calculateAgeInDays = (firstFeedDate) => {
    const today = new Date();
    const timeDifference = today - new Date(firstFeedDate);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

// Pre-save hook to calculate age
laporanHarianSchema.pre('save', async function (next) {
    try {
        console.log("pre save")
        const laporan = this;

        // Update age
        const firstFeed = await StokProduk.findOne({
            kandang_id: laporan.kandang_id,
            tipe_produk: 'PAKAN',
        }).sort({ tgl_masuk: 1 });

        if (!firstFeed) {
            throw new Error('No feed has been added to this Kandang yet');
        }

        laporan.umur = calculateAgeInDays(firstFeed.tgl_masuk);
        console.log(laporan.umur, firstFeed.tgl_masuk)

        next();
    } catch (error) {
        next(error);
    }
});

// Post-find hook to calculate age
laporanHarianSchema.post(['find', 'findOne'], async function (docs, next) {
    try {
        console.log("post find")
        if (!docs) return next();

        const laporanArray = Array.isArray(docs) ? docs : [docs];

        for (const laporan of laporanArray) {

            // Update age
            const firstFeed = await StokProduk.findOne({
                kandang_id: laporan.kandang_id,
                tipe_produk: 'PAKAN',
            }).sort({ tgl_masuk: 1 });

            if (!firstFeed) {
                throw new Error('No feed has been added to this Kandang yet');
            }

            laporan.umur = calculateAgeInDays(firstFeed.tgl_masuk);
            await laporan.save();
        }

        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('LaporanHarian', laporanHarianSchema);