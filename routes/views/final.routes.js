const router = require('express').Router()
const FinalPage = require('../../components/pages/FinalPage');
const { User } = require('../../db/models')

router.get('/', async (req, res) => {
    const { user } = res.app.locals;
    try {
        const user = await User.findOne({ where: { id: 1 } })
        const html = res.renderComponent(FinalPage, { title: 'final page', user })
        res.send(html)
    } catch ({ message }) {
        res.status(500).json({ message })
    }
})

module.exports = router;