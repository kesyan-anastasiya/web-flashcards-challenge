const router = require("express").Router();

const QuestionsPage = require('../../components/pages/QuestionsPage');

router.get("/", (req, res) => {
  res.send(res.renderComponent(QuestionsPage, { title:'main' }));
});

module.exports = router;