const router = require("express").Router();
const { User } = require("../../db/models");

router.post("/log", async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;
    user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: "Такого пользователя нет" });
      return;
    }
    if (user.password !== password) {
      res.json({ message: "Ошибка пароля" });
    } else {
      res.json({ message: "success" });
      res.app.locals.user = user;
      res.app.locals.score = user.score;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/registration", async (req, res) => {
  let user;
  try {
    const { name, email, password } = req.body;
    user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: "Такой пользователь уже есть!!!" });
      return;
    }
    user = await User.create({ name, email, password, score: 0 });
    res.json({ message: "success" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
