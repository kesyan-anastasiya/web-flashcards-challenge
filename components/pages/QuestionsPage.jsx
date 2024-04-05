const React = require('react');
const Layout = require('../Layout');
const QuestionCard = require('../ui/QuestionCard');

module.exports = function QuestionsPage({ title, question, user,index }) {
  return (
    <Layout title={title} user={user}>
      <div className="questionList">
        <QuestionCard question={question} />
        <a className="next" href={`/categories/${question.category_id}/question/${+index + 1}`}>Далее</a>
      </div>
    </Layout>
  );
};
