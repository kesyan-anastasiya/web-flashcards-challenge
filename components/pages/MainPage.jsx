const React = require("react");
const Layout = require("../Layout");

module.exports = function MainPage({ title }) {
  return (
    <Layout title={title}>
            <div>
                <h2>Привет,</h2>
                <button className='startButton'>Начать квиз!</button>
            </div>
    </Layout>
  );
};
