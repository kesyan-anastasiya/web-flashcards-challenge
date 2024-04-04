const router = require('express').Router()
const FinalPage = require('../../components/pages/FinalPage');
const { User } = require('../../db/models')

router.get('/', async (req, res) => {
    // res.app.locals.user = user;
    const user = await User.findOne({ where: { id: 1 } })
    const html = res.renderComponent(FinalPage, { title: 'final page' }, user)
    res.send(html)
})

module.exports = router;