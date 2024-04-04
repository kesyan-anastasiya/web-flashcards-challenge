const router = require("express").Router();
const RegPage = require("../../components/pages/RegPage");
const LogPage = require("../../components/pages/LogPage");

router.get("/log", (req, res) => {
  const html = res.renderComponent(LogPage, {
    title: "log",
  });
  res.send(html);
});

router.get("/registration", (req, res) => {
  const html = res.renderComponent(RegPage, {
    title: "registration",
  });
  res.send(html);
});

module.exports = router;
