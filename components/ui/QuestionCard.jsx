const React = require("react");

module.exports = function QuestionCard({ question }) {
  console.log(question);
  return (
    <div className='questionCard' >
      <h2>122131231231</h2>
      <img src={question.img} alt=""/>
      <h2>{question.description}</h2>
      <input name="answer" type="text" placeholder="Введте ответ"/>
    </div>
  );
};
