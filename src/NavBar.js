import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  Link , withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from './actions'
import { bindActionCreators } from 'redux'


class NavBar extends React.Component{
 
componentDidMount(){
  console.log(this.props);
  this.props.wholesomeize();
}

handleGoToLogin(e){
  e.preventDefault();
  this.props.history.push("/login")
}

handleGoToRegister(e){
  e.preventDefault();
  this.props.history.push("/register")
}

render(){
  const { icon, primary } = this.props;
  console.log(this.props)
  return (
    <div>
      
      <AppBar className="font" position="static">
        <Toolbar>
          <Typography variant="h6">
            Cute Animals
          </Typography>
          <Button color="default" onClick={e=>this.handleGoToLogin(e)} className="font">
            Login
          </Button>
          <Button color="default" onClick={e=>this.handleGoToRegister(e)}>
               Register        
          </Button>
        </Toolbar>
      </AppBar>
     
    </div>
  );}
}

const mapStateToProps = (state, props)=> {
   console.log(state)
  return {
    ...props,
    ...state
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators(actions, dispatch)
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));