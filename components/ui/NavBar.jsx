// const React = require("react");

module.exports = function NavBar() {
  return (
    <div className="navbar">
      <a href="/">Главная</a>
      <div className="navbar-reg" style={{ float: "right", fontSize: "20px" }}>
        <div className="select hidden">
          <a href="/auth/sign-up">Регистрация</a>
        </div>
        <div className="select hidden">
          <a href="/auth/sign-in">Войти</a>
        </div>
      </div>
    </div>
  );
};
