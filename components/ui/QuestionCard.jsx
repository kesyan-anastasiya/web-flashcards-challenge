const React = require("react");

module.exports = function QuestionCard({ question }) {
  return (
    <div className="questionCard" >
      <h2>122131231231</h2>
      <img src={question.img} alt="" />
      <h2>{question.description}</h2>
      <form className="answerForm" data-questionId={question.id}>
        {" "}
        <input name="answer" type="text" placeholder="Введите ответ" />{" "}
      </form>
    </div>
  );
};
