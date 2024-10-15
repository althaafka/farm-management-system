const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { nama, email, password, role, no_telp, alamat } = req.body;

        if (!nama || !email || !password || !role || !no_telp || !alamat ) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        if (req.user) {
            if (req.user.role == 'PETERNAK'){
                return res.status(403).json({ message: 'Only PPL can register Peternak'})
            }
        }

        const user = new User({ nama, email, password: hashedPassword, role, no_telp, alamat });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });  
        }  

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };
