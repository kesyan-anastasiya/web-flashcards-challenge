const React = require("react");
const Layout = require("../Layout");

module.exports = function CategoriesPage({ title }) {
  return (
    <Layout title={title}>
      <div>
        {category.map((el) => (
          <BookCard category={el} />
        ))}
      </div>
    </Layout>
  );
};
