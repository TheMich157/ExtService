const router = require('express').Router();
const ctrl = require('../controllers/serviceController');

router.get('/ping', ctrl.ping); //32
router.get('/status', (req,res)=>res.json({status:'ok'})); //33

module.exports = router;
