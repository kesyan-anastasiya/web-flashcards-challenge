const router = require('express').Router();
const mainRouter = require('./views/main.routes');
const authRouter = require('./views/auth.routes');
const categoryRouter = require('./views/categories.routes')
const finalRouter = require('./views/final.routes')

const apiAuthRouter = require('./api/api.auth.routes');


router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter)
router.use('/final', finalRouter)

router.use('/api/auth', apiAuthRouter);



module.exports = router;
