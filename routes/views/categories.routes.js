const router = require("express").Router();
const CategoriesPage = require("../../components/pages/CategoriesPage");
const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  const cards = await Category.findAll();
  res.send(res.renderComponent(CategoriesPage, {title: 'categories', cards }));
});

module.exports = router;
