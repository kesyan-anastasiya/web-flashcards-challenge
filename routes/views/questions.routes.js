const router = require("express").Router();
const { Question } = require('../../db/models');
const QuestionsPage = require('../../components/pages/QuestionsPage');

router.get("/", async (req, res) => {
  try {
    const question = await Question.findOne({ where: {id: 1} });
    res.send(res.renderComponent(QuestionsPage, { question}));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;