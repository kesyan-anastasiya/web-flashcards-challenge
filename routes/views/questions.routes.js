const router = require("express").Router();
const { Question, User, Category } = require('../../db/models');
// const QuestionsPage = require('../../components/pages/QuestionsPage');

// router.get("/:qid", async (req, res) => {
//   try {
//     const { id, qid } = req.params;
//     const { user } = res.app.locals;
//     const userInDb = await User.findOne({ where: {id: user.id } });
//     const question = await Question.findOne({ where: { category_id: id, id: question.qid }});
//     res.send(res.renderComponent(QuestionsPage, { question }));
//     res.app.locals.user = userInDb;
//   } catch ({ message }) {
//     res.json({ message });
//     res.redirect('/finalPage');
//   }
// });

module.exports = router;