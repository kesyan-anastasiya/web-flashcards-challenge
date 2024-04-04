const React = require("react");

module.exports = function QuestionCard({ question}) {
  return (
    <div className='questionCard' data-id={question.id}>
      <h2>{question.img}</h2>
      <h2>{question.description}</h2>
      <input>Впишите ответ</input>
      <button className='nextButton'>К следующему вопросу</button>
    </div>
  );
};
