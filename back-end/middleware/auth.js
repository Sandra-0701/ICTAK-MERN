const jwt = require('jsonwebtoken');
const Admin = require('../model/Admin');
const mentorModel = require('../model/mentorModel');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        let user;
        if (decoded.role === 'Admin') {
            user = await Admin.findById(decoded.userId);
        } else if (decoded.role === 'Mentor') {
            user = await mentorModel.findById(decoded.userId);
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('Authentication error:', err);
        return res.status(403).json({ error: 'Forbidden' });
    }
};

module.exports = { authenticate };
