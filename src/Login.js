import React from 'react';
import { Route, Switch, Link, Router } from 'react-router-dom';

class Login extends React.Component {


  render() {

    return (

      <form>
        <label>Username
        <input type="text" name="name" placeholder="username" />
        </label>
        <br />
        <label>
          Password
      <input type="password" placeholder="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      <br />
          <Link to="/register">Register</Link>

      </form>

    )
  }


}


export default Login