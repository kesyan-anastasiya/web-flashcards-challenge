const React = require("react");
const Layout = require("../Layout");

module.exports = function FinalPage({ title, user }) {
  return (
    <Layout title={title}>
      <div className="finallka">
        <h1>{`Ты заработал ${user.score} очков, умница!`}</h1>
        <img src="/img/AbSd.gif" className="good-boy" alt="good-boy" />
      </div>
    </Layout>
  );
};
