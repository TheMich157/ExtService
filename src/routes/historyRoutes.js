const router = require('express').Router();
const ctrl = require('../controllers/historyController');

router.get('/list', ctrl.list); //11
router.get('/by-user', ctrl.list); //12
router.delete('/clear', (req,res)=>res.json({})); //13
router.get('/detail/:id', (req,res)=>res.json({})); //14
router.post('/restore/:id', (req,res)=>res.json({})); //15

module.exports = router;
