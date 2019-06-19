import React from 'react';
import { Route, Switch, Link, Router, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    let user = this.props.users.find((user) => {
      if (user.username === this.state.username && user.password === this.state.password) {
        return user;
      }
    });
    if (user) {
      this.props.history.push("/")
    } else {
      alert("user/pass does not exist")
    }
  }

  handleRegister(e) {
    e.preventDefault();
    this.props.history.push("/register")
  }

  render() {

    return (

      <form
        onSubmit={this.props.handleLogin}
        className="font"
        style={{ marginLeft: "2em" }}
      >
        <br />
        <h3 className="font">Enter User Information:</h3>
        <TextField
          type="text"
          name="email"
          placeholder="      email"
          onChange={e => this.handleChange(e)}
          variant="outlined"
          value={this.state.email}
        />
        <br />
        <br />

        <TextField
          type="password"
          name="password"
          placeholder="      password"
          onChange={e => this.handleChange(e)}
          variant="outlined"
          value={this.state.password}
        />

        <br />
        <br />
        <Button type="submit">Login</Button>
        <br />
        <Button
          onClick={e => this.handleRegister(e)}
        >Register</Button>

      </form>

    )
  }


}


export default withRouter(Login);