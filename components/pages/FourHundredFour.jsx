const React = require("react");
const Layout = require("../Layout");

module.exports = function FourHundredFour({ title }) {
  return (
    <Layout title={title}>
      <body>
        <div class="error-container">
          <h1 class="error-title">404</h1>
          <p class="error-message">Не переживай, все хорошо, возвращайся обратно к прекрасному квизу!</p>
          <img
            src="https://i.gifer.com/jW.gif"
            alt="Page Not Found"
            class="error-image"
          />
          <div>
          <a href="/" class="error-button">
            Вернуться на главную
          </a>
          </div>
        </div>
      </body>
    </Layout>
  );
};
