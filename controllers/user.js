const User = require('../models/user');
const bcrypt = require('bcrypt');

// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'nama email no_telp alamat role');
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User by ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id, 'nama email no_telp alamat role');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const id = req.user.userId;

        const updates = { ...req.body };

        if (updates.email || updates.password || updates.role) {
            return res.status(400).json({ error: "You can not change email, password, or role"})
        }
        delete updates.email;
        delete updates.password;
        delete updates.role; 

        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true, select: 'nama no_telp alamat' });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
