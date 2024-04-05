const router = require("express").Router();

const MainPage = require('../../components/pages/MainPage');

router.get("/", (req, res) => {
  res.send(res.renderComponent(MainPage, { title:'main' }));
});


router.get('/logout', async (req, res) => {
  delete res.app.locals.user
  res.redirect('/');
});

module.exports = router;
