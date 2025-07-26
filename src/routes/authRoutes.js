const router = require('express').Router();
const ctrl = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({ windowMs: 60 * 1000, max: 5 });

router.post('/login', loginLimiter, ctrl.login); //23
router.get('/validate', auth, ctrl.validate); //24

module.exports = router;
