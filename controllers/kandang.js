const Kandang = require('../models/kandang');
const User = require('../models/user')

// Create Kandang
const createKandang = async (req, res) => {
    try {
        const { nama_kandang, lokasi, kapasitas, peternak_ids } = req.body;
        const ppl_id = req.user.userId;

        if ( !nama_kandang || !kapasitas ) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        // Verify peternak_ids
        if (peternak_ids){
            const peternakExist = await User.find({ _id: { $in: peternak_ids } });
            if (peternakExist?.length !== peternak_ids?.length) {
                return res.status(400).json({ message: 'One or more peternak IDs are invalid' });
            }
        }
        
        const kandang = new Kandang({ nama_kandang, lokasi, kapasitas, ppl_id, peternak_ids });
        await kandang.save();
        res.status(201).json({ message: 'Kandang successfully added', kandang });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Kandang
const updateKandang = async (req, res) => {
    try {
        const { id } = req.params;
        const { ppl_id, ...updatedData } = req.body;
        const kandang = await Kandang.findByIdAndUpdate(id, updatedData, { new: true });

        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        res.json({ message: 'Kandang successfully updated', kandang });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Kandang
const deleteKandang = async (req, res) => {
    try {
        const { id } = req.params;
        const kandang = await Kandang.findByIdAndDelete(id);

        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        res.json({ message: 'Kandang successfully deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add Peternak to Kandang
const addPeternakToKandang = async (req, res) => {
    try {
        const { id } = req.params;
        const { peternak_id } = req.body; 

        const kandang = await Kandang.findById(id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        // Verify peternak_id
        const peternak = await User.findById(peternak_id);
        if (!peternak) {
            return res.status(400).json({ message: 'Invalid peternak ID' });
        }

        // Check if peternak is already assigned
        if (kandang.peternak_ids.includes(peternak_id)) {
            return res.status(400).json({ message: 'Peternak is already assigned to this kandang' });
        }

        kandang.peternak_ids.push(peternak_id);
        await kandang.save();

        res.status(200).json({ message: 'Peternak successfully added to kandang', kandang });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Remove Peternak from Kandang
const removePeternakFromKandang = async (req, res) => {
    try {
        const { id } = req.params;
        const { peternak_id } = req.body;

        const kandang = await Kandang.findById(id);
        if (!kandang) {
            return res.status(404).json({ message: 'Kandang not found' });
        }

        // Check if peternak is assigned
        if (!kandang.peternak_ids.includes(peternak_id)) {
            return res.status(400).json({ message: 'Peternak is not assigned to this kandang' });
        }

        // Remove peternak from the kandang
        kandang.peternak_ids = kandang.peternak_ids.filter(
            (id) => id.toString() !== peternak_id
        );
        await kandang.save();

        res.status(200).json({ message: 'Peternak successfully removed from kandang', kandang });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createKandang,
    updateKandang,
    deleteKandang,
    addPeternakToKandang,
    removePeternakFromKandang
};
