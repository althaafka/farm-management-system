const jwt = require('jsonwebtoken');

// Optional authentication
// If token is provided, it verifies and attaches the decoded user
// If no token is provided, the request proceed without authentication
const optionalAuth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = optionalAuth;
