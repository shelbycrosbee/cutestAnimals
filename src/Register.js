import React from 'react';
import { Route, Switch, Link, Router, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {}
    }
  }

  handleChange(e) {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    })

  }

  handleGoToLogin(e) {
    e.preventDefault();
    this.props.history.push("/login")
  }


  render() {

    return (
      <form

        onSubmit={this.props.handleRegister}
        style={{ marginLeft: "2em" }}
      >
        <br />
        <h1 className="font">Register</h1>
        <TextField
          type="text"
          name="username"
          placeholder="username"
          onChange={e => this.handleChange(e)}
          variant="outlined"
        />

        <br />
        <br />

        <TextField
          type="text"
          name="password"
          placeholder="password"
          onChange={e => this.handleChange(e)}
          variant="outlined"
        />

        <br />
        <br />

        <TextField
          type="tel"
          name="email"
          placeholder="Email"
          onChange={e => this.handleChange(e)}
          variant="outlined"
        />

        <br />
        <br />
        <Button
          type="submit"
          onClick={e => this.props.addNewUser(e, this.state.newUser)}
        >Submit</Button>
        <br />
        <Button onClick={e => this.handleGoToLogin(e)}>Go to Login</Button>
      </form>
    )
  }



}


export default withRouter(Register)