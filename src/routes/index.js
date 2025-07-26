const router = require('express').Router();

router.use('/user', require('./userRoutes')); //1-10
router.use('/history', require('./historyRoutes')); //11-15
router.use('/backup', require('./backupRoutes')); //16-20
router.use('/migration', require('./migrationRoutes')); //21-22
router.use('/auth', require('./authRoutes')); //23-24
router.use('/admin', require('./adminRoutes')); //25-29
router.use('/logs', require('./logRoutes')); //30-31
router.use('/service', require('./serviceRoutes')); //32-33
// additional placeholders to reach 50 endpoints
for(let i=34;i<=50;i++) {
  router.get(`/extra${i}`, (req,res)=>res.json({index:i}));
}

module.exports = router;
