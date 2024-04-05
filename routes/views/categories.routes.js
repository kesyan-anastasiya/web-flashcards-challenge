const router = require("express").Router();
const CategoriesPage = require("../../components/pages/CategoriesPage");
const QuestionsPage = require('../../components/pages/QuestionsPage')
const { Category, User, Question} = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const { user } = res.app.locals;
    const userInDb = await User.findOne({ where: { id: user.id } });
    const quizzes = await Category.findAll();
    res.send(res.renderComponent(CategoriesPage, { quizzes, user: userInDb }));
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get('/:id/question', async (req, res) => {
    const { user } = res.app.locals;
    try {
      const { id } = req.params;
      const userInDb = await User.findOne({where: {id: user.id}})
      const question = await Question.findOne({ where: { category_id: id } });
      res.send(res.renderComponent(QuestionsPage, { question, user: userInDb }));
    } catch ({ message }) {
      res.json({ error: message });
    }
  });
module.exports = router;
