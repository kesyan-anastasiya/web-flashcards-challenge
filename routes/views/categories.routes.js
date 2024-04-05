const router = require("express").Router();
const CategoriesPage = require("../../components/pages/CategoriesPage");
const QuestionsPage = require("../../components/pages/QuestionsPage");
const { Category, User, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const { user } = res.app.locals;
    if (user) {
      const userInDb = await User.findOne({ where: { id: user.id } });
      const quizzes = await Category.findAll();
      res.send(
        res.renderComponent(CategoriesPage, { quizzes, user: userInDb })
      );
    } else {
      res.redirect("/auth/registration");
    }
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get("/:id/question/:index", async (req, res) => {
  try {
    const { id, index } = req.params;
    const { user } = res.app.locals;
    const userInDb = await User.findOne({ where: { id: user.id } });
    const questions = await Question.findAll({ where: { category_id: id } });
    if (questions[+index]) {
      res.send(
        res.renderComponent(QuestionsPage, {
          question: questions[+index],
          user: userInDb,
          index,
        })
      );
    } else {
      res.redirect("/categories");
    }
  } catch ({ message }) {
    console.log(message);
    res.end();
  }
});

module.exports = router;
