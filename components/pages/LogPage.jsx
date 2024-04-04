const React = require('react');
const Layout = require('../Layout');

function LogPage() {
  return (
    <Layout>
      <div className='container'>
        <form className='sign-in'>
          <input
            name='name'
            className='form-control'
            id='exampleInputEmail1'
            placeholder='Введите имя'
          />
          <input
            name='name'
            className='form-control'
            id='exampleInputEmail1'
            placeholder='Введите Имя'
          />
          <input
            name='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Введите пароль'
          />
          <button type='submit' className='btn btn-primary'>
            Авторизироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = LogPage;