import React from 'react';
import { Route, Switch, Link, Router } from 'react-router-dom';


class Register extends React.Component{

render(){

return(
  <form>
      <label>Username
        <input type="text" name="name" placeholder="username"/>
      </label>
      <br/>
      <label>
        Password
      <input type="password" placeholder="Password"/>
      </label>
      <br/>
      <label>
        Phone Number
      <input type="tel" placeholder="Phone Number"/>
      </label>
      <br/>
      <button type="submit">Submit</button>
      <br/>
      <Link to="/login">Login</Link>
    </form> 
  )
}



}


export default Register