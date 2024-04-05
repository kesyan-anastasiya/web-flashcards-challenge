const router = require('express').Router();
const mainRouter = require('./views/main.routes');
const authRouter = require('./views/auth.routes');

const categoryRouter = require('./views/categories.routes')
const finalRouter = require('./views/final.routes')
const fourHundredFourRouter = require('./views/fourHundredFour')

const apiAuthRouter = require('./api/api.auth.routes');
const apiQuestionsRouter = require('./api/api.questions.routes')


router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter)
router.use('/final', finalRouter)

router.use('/api/auth', apiAuthRouter);
router.use('/api/question', apiQuestionsRouter)


router.use('/*', fourHundredFourRouter)

module.exports = router;
