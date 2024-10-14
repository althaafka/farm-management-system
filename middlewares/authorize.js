const authorize = (role) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        if (role != userRole) {
            return res.status(403).json({ message: `Forbidden: : You need ${role} role to access this resource` });
        }

        next();
    };
}

module.exports = authorize;