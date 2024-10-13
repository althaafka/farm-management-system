const authorize = (role) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        const userId = req.user.userId;

        if (role == "self" && req.params.userId) {
            if (userId === parseInt(req.params.userId)) {
                return next(); 
            } else {
                return res.status(403).json({ message: 'Forbidden' });
            }
        }

        if (role != userRole) {
            return res.status(403).json({ message: `Forbidden: : You need ${role} role to access this resource` });
        }

        next();
    };
}
  
module.exports = authorize;