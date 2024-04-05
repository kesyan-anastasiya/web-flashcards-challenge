const router = require('express').Router()
const FourHundredFour = require('../../components/pages/FourHundredFour')

router.get('/', async (req, res) => {
    try {
        const html = res.renderComponent(FourHundredFour, {
            title: 'NoMoney NoHoney',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

module.exports = router;