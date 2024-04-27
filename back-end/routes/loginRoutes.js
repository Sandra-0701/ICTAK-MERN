// const express = require('express');
// const router = express.Router();
// const loginModel = require('../model/loginModel');

// router.use(express.json());

// // Handle login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const user = await loginModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Check if the password is correct
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Incorrect password' });
//     }

//     // If everything is correct, you can return success
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
