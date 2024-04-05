const React = require('react');
const Layout = require('../Layout');
const QuestionCard = require('../ui/QuestionCard');

module.exports = function QuestionsPage({ title, question, user }) {
  return (
    <Layout title={title}>
      <div className="questionList">
        <QuestionCard question={question} />
        <a className="next" href="#{}">Далее</a>
      </div>
    </Layout>
  );
};
