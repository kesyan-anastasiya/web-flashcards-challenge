const React = require("react");

module.exports = function QuestionCard({ question }) {
  return (
    <div className='questionCard' questionId={question.id}>
      <img src={question.img} alt=""/>
      <h2>{question.description}</h2>
      <input type='text' name='answer' placeholder='Введите ответ' required />
      <button className='OKbut' type='submit'>
        Ответить
      </button>
    </div>
  );
};
