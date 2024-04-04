const React = require('react');
const Layout = require('../Layout');

function RegPage() {
  return (
    <Layout>
      <div className='container'>
        <form className='sign-up'>
          <input
            name='name'
            className='form-control'
            id='exampleInputEmail1'
            placeholder='Введите Имя'
          />
          <input
            name='email'
            className='form-control'
            id='exampleInputEmail'
            placeholder=' Введите email'
          />
          <input
            name='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Введите пароль'
          />
          {/* <input
            name='password'
            className='form-control'
            id='exampleInputPassword2'
            placeholder='Повторите пароль'
          /> */}
          <button type='submit' className='btn btn-primary'>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegPage;