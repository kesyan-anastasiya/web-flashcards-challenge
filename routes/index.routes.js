const router = require('express').Router();
const mainRouter = require('./views/main.routes');
const authRouter = require('./views/auth.routes');

const questionsRouter = require('./views/questions.routes');
const categoryRouter = require('./views/categories.routes')


const apiAuthRouter = require('./api/api.auth.routes');
// const apiTwitsRouter = require('./api/api.categories.routes')
// const usersRouter = require('./views/users.routes')


router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/questions', questionsRouter);
router.use('/categories', categoryRouter)

// router.use('/users', usersRouter)

router.use('/api/auth', apiAuthRouter);
// router.use('/api/twits', apiTwitsRouter)



module.exports = router;
