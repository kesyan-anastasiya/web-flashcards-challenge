const React = require("react");

module.exports = function QuestionCard({ question }) {
  return (
    <div className='questionCard' questionId={question.id}>
      <h2>122131231231</h2>
      <img src={question.img} alt=""/>
      <h2>{question.description}</h2>
      <input name="answer" type="text" placeholder="Введите ответ"/>
    </div>
  );
};
