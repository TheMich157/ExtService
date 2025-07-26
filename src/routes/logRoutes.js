const router = require('express').Router();
const ctrl = require('../controllers/logController');

router.get('/live', ctrl.live); //30
router.get('/errors', ctrl.errors); //31

module.exports = router;
