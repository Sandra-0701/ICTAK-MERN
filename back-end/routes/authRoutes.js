const express = require('express');
const router = express.Router();
const Admin = require('../model/Admin');
const Mentor = require('../model/mentorModel');

router.post('/login', async (req, res) => {
  const { Email, Password } = req.body;
  
  try {
    const admin = await Admin.findOne({ Email });
    if (admin && admin.Password === Password) {
      return res.status(200).json({ success: true, role: 'Admin', adminId: admin._id });
    }

    const mentor = await Mentor.findOne({ Email });
    if (mentor && mentor.Password === Password) {
      return res.status(200).json({ success: true, role: 'Mentor', mentorId: mentor._id });
    }

    res.status(401).json({ success: false, message: 'Invalid email or password' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
