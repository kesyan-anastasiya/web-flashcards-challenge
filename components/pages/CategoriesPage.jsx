const React = require("react");
const Layout = require("../Layout");

module.exports = function CategoriesPage({ quizzes, user }) {
  return (
    <Layout user={user}>
      <div className='container__category'>
      {quizzes.map((quiz) => (
          <button className='themes'>
            <a href={`/categories/${quiz.id}/question/0`}>{quiz.title}{quiz.img}</a>
          </button>
        ))}
      </div>
    </Layout>
  );
};
