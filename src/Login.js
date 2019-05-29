import React from 'react';
import { Route, Switch, Link, Router, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      users: [
        {
          id: 0,
          username: "Sara",
          password: "sara",
        },
        {
          id: 1,
          username: "Chris",
          password: "chris",
        },
        {
          id: 2,
          username: "Shelby",
          password: "shelby",
        }
      ]
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    let user = this.state.users.find((user) => {
      if (user.username === this.state.username && user.password === this.state.password) {
        return user;
      }
      });
    if(user){
      this.props.history.push("/")
    } else {
      alert("user/pass dne")
    }
  }



  render() {

    return (

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <br />
        <label>Username
        <input
            type="text"
            name="username"
            placeholder="username"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          Password
        <input
            type="password"
            name="password"
            placeholder="password"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
        <Link to="/register">Register</Link>

      </form>

    )
  }


}


export default withRouter(Login);