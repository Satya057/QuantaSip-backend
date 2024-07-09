const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', authMiddleware, (req, res) => {
  res.send('This is the protected dashboard');
});

module.exports = router;
