const router = require('express').Router();
const ctrl = require('../controllers/adminController');
const { auth } = require('../middleware/auth');

router.get('/users', auth, ctrl.users); //25
router.post('/user/:id/ban', auth, ctrl.ban); //26
router.get('/export', auth, (req,res)=>res.json({})); //27
router.post('/import', auth, (req,res)=>res.json({})); //28
router.delete('/user/:id', auth, (req,res)=>res.json({})); //29

module.exports = router;
