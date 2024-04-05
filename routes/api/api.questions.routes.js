const router = require("express").Router();
const { Question } = require('../../db/models')

router.post('/', async (req, res) => {
    try {
        const { answer, questionId } = req.body;
        if (!answer.trim()) {
            res.json({ message: 'Вы не туда жмав, впишите сначала ответ' })
        } else {
            const { user } = res.app.locals;
            const question = await Question.findOne({ where: { id: questionId } })
            if (question.answer === answer) {
                res.json({ message: "Ну каков умничка!!"})
            } else {
                res.json({ message: 'Не, там все не так'})
            }
        }
    } catch ({ message }) {
        res.status(500).json({ message })
    }
})

module.exports = router;