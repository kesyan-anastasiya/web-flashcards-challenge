const React = require("react");
const Layout = require("../Layout");

module.exports = function QuestionsPage({ questions, title }) {
  return (
    <Layout title={title}>
      <div className='questionList'>
        { questions.map(el => <QuestionCard question={el}/>)}
      </div>
    </Layout>
  );
};
