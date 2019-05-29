import React from 'react';

class Login extends React.Component{


render(){

return(
  
    <form>
      <label>Username
        <input type="text" name="name" placeholder="username"/>
      </label>
      <br/>
      <label>
        Password
      <input type="text" placeholder="password"/>
      </label>
      <br/>
      <button type="submit">Login</button>
      
    </form>
    
  )
}


}


export default Login