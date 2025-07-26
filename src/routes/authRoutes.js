const router = require('express').Router();
const ctrl = require('../controllers/authController');
const { auth } = require('../middleware/auth');

router.post('/login', ctrl.login); //23
router.get('/validate', auth, ctrl.validate); //24

module.exports = router;
