const router = require('express').Router();
const ctrl = require('../controllers/migrationController');

router.get('/status', ctrl.status); //21
router.post('/force', ctrl.force); //22

module.exports = router;
