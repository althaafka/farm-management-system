const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const kandangRoutes = require('./routes/kandang');
const sapiRoutes = require('./routes/sapi')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/kandang', kandangRoutes);
app.use('/api/sapi', sapiRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Database connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
