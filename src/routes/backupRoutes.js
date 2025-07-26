const router = require('express').Router();
const ctrl = require('../controllers/backupController');

router.post('/create', ctrl.create); //16
router.post('/restore', (req,res)=>res.json({})); //17
router.get('/list', ctrl.list); //18
router.delete('/clear', (req,res)=>res.json({})); //19
router.get('/detail/:id', (req,res)=>res.json({})); //20

module.exports = router;
