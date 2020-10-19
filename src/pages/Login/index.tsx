import React from 'react';

import './styles.css';

const Login = () => {
  return (
    <div id="page-login">
    <div id="page-cover">
      <p>Super Simple Invoicing ofr Freelancers e Smalll Bussisses</p>
    </div>
      <div id="page-login-content" className="container">
        <h1>SaaC</h1>
        <div className="form-container">
          <form action="">
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="your_email.exemple.com"/>
            <label htmlFor="">Password</label>
            <input type="text"/>
            <span>Forgot Password?</span>
            <button>Login</button>
          </form>
          <span id="otherSign">or Sign in with</span>
        </div>
      </div>
     
    </div>
  )
}

export default Login;