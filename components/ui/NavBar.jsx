const React = require("react");

module.exports = function NavBar({ user }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <div id="nav-mobile">
          <a href="/" className="logo">
            Главная
          </a>
          {user ? (
            <>
              <div className="navbar-user">
                <div className="userName">Привет, {user.name}!</div>
                <a href="/logout">Выйти</a>
                <a href="/scores-table">
                  Очки:
                  {user.score}
                </a>
              </div>
            </>
          ) : (
            <div
              className="navbar-reg"
              style={{ float: "right", fontSize: "20px" }}
            >
              <div className="select hidden">
                <a href="/auth/registration">Регистрация</a>
              </div>
              <div className="select hidden">
                <a href="/auth/log">Войти</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
