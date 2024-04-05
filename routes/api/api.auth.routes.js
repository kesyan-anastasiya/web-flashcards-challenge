const router = require("express").Router();
const bcrypt = require('bcrypt');
const { User } = require("../../db/models");

router.post("/log", async (req, res) => {
  let user;
  try {
    const { name, email, password } = req.body;
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      res.json({ message: 'Заполните все пустые поля!' });
      return;
    }
    user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: "Такого пользователя нет" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
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
    const { name, email, password, cpassword } = req.body;
    user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: "Такой пользователь уже есть!!!" });
      return;
    }
    if (password !== cpassword) {
      res.status(200).json({ message: 'Пароли не совпадают' });
      return;
    }
    const hpassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hpassword, score: 0 });
    res.json({ message: "success" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
