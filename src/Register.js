import React from 'react';
import { Route, Switch, Link, Router, withRouter } from 'react-router-dom';


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
            type="text"
            name="password"
            placeholder="password"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          Phone Number
      <input
            type="tel"
            name="tel"
            placeholder="Phone Number"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <br />
        <button 
          type="submit" 
          onClick={e=>this.props.addNewUser(e,this.state.newUser)}
        >Submit</button>
        <br />
        <Link to="/login">Go to Login</Link>
      </form>
    )
  }



}


export default withRouter(Register)