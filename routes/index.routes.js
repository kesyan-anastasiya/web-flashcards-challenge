const router = require("express").Router();
const categoriesRoutes = require("./views/categories.routes");
// const authRouter = require('./views/auth.routes')
// const twitsRouter = require('./views/twits.routes')

// const apiAuthRouter = require('./api/api.auth.routes')
// const apiTwitsRouter = require('./api/api.categories.routes')
// const usersRouter = require('./views/users.routes')

router.use("/categories", categoriesRoutes);
// router.use('/auth', authRouter)
// router.use('/twits', twitsRouter)
// router.use('/users', usersRouter)

// router.use('/api/auth', apiAuthRouter)
// router.use('/api/twits', apiTwitsRouter)

module.exports = router;
