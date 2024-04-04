const React = require("react");
const Layout = require("../Layout");

module.exports = function CategoryCard({ category, title }) {
  return (
    <Layout title={title}>
      <div>
        <div>
          <img src={category.img} />
        </div>
        <h2>{category.name}</h2>
      </div>
    </Layout>
  );
};
