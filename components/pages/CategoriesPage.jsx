const React = require("react");
const Layout = require("../Layout");

module.exports = function CategoriesPage({ quizzes, user }) {
  return (
    <Layout user={user}>
      <div className='container__category'>
      {quizzes.map((quiz) => (
          <div className='themes'>
            <a href={`/categories/${quiz.id}/question`}>{quiz.title}{quiz.img}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
