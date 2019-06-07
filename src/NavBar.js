import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  Link , withRouter } from 'react-router-dom';


class NavBar extends React.Component{
 

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
export default withRouter(NavBar)