const React = require("react");
const Layout = require("../Layout");

function RegPage() {
  return (
    <Layout>
      <div className="container">
        <form className="sign-up">
          <input name="name" className="regName" placeholder="Введите имя" />
          <input
            name="email"
            className="regEmail"
            placeholder=" Введите email"
          />
          <input
            name="password"
            className="regPassword"
            placeholder="Введите пароль"
            type="password"
          />
          <input
            name="cpassword"
            className="regCpassword"
            placeholder="Повторите пароль"
            type="password"
          />
          <button type="submit" className="btn-primary">
            Зарегистрироваться
          </button>
          <div className="error"></div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegPage;
