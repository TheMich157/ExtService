const router = require('express').Router();
const ctrl = require('../controllers/userController');

router.post('/save', ctrl.save); // 1
router.get('/load', ctrl.load); // 2
router.get('/list', ctrl.list); // 3
router.post('/update-field', (req,res)=>res.json({})); // 4
router.post('/reset', (req,res)=>res.json({})); // 5
router.get('/inventory', (req,res)=>res.json([])); // 6
router.post('/merge', (req,res)=>res.json({})); // 7
router.delete('/delete', (req,res)=>res.json({})); // 8
router.post('/update-coins', (req,res)=>res.json({})); // 9
router.post('/update-level', (req,res)=>res.json({})); //10

module.exports = router;
