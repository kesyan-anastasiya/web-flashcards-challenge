const React = require("react");
const Layout = require("../Layout");

module.exports = function MainPage({ title, user}) {
  return (
    <Layout title={title} user={user}>
            <div>
                <h2>Привет,</h2>
                <a className='btnStart' href='/categories'>
            Начать квиз
          </a>
                {/* <button className='startButton'>Начать квиз!</button> */}
            </div>
    </Layout>
  );
};
