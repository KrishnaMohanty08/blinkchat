const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is protected data', userId: req.userId });
});


module.exports = router;
