const React = require("react");
const Layout = require("../Layout");

module.exports = function MainPage({ title, user }) {
  console.log(user);
  return (
    <Layout title={title} user={user}>
            <div className='mainConteiner'>
            <div>Перед тобой квиз от команды "Медведи в шкуре барса"</div>
            <img 
              src="https://yt3.ggpht.com/ytc/AKedOLT5BcV4qf520wGBGWURWMJlRp7e9kxRiV8F5Gew=s900-c-k-c0x00ffffff-no-rj"
              alt=""
              width="400"
              height="400"
              />
            <div>От создателей "Бобры среди нас"!</div>
            <a className='btnStart' href='/categories'>
            Начать квиз
            </a>
                {/* <button className='startButton'>Начать квиз!</button> */}
            </div>
    </Layout>
  );
};
