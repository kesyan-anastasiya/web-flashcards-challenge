const React = require('react');
const Layout = require('../Layout');

function LogPage() {
  return (
    <Layout>
      <div className='container'>
        <form className='sign-in' >
          <input
            name='name'
            className='logName'
            placeholder ='Введите имя'
          />
          <input
            name='email'
            className='logEmail'
            placeholder=' Введите email'
          />
          <input
            name='password'
            className='logPassword'
            placeholder='Введите пароль'
          />
          <button type='submit' className='btn-primary'>
            Авторизироваться
          </button>
        </form>
        <div className="error2"></div>
      </div>
    </Layout>
  );
}

module.exports = LogPage;