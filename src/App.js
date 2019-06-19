import React from 'react';
import './App.css';
import CreateAnimal from './Crud/CreateAnimal';
import ReadAnimal from './Crud/ReadAnimal';
import Login from './Login';
import Register from './Register';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCounter: 6,
      userIdCounter: 3,
      cuteAnimals:
        [

        ],
      editAnimalName: "",
      apiToken: ""
   
    }
  }

  componentDidMount() {
    // this.props.history.push("/login")
  }

  handleLogin = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post("/login", {
        email: e.target.email.value,
        password: e.target.password.value
      })
      this.setState({ apiToken: `Bearer ${response.data.token}` })
      const animalResponse = await axios.get('/animals', {
        headers: {
          authorization: this.state.apiToken
          // authorization: `Bearer ${response.data.token}`
        }
      })
      this.setState({ cuteAnimals: animalResponse.data, idCounter: this.state.cuteAnimals.length })
      this.props.history.push("/")
    }
    catch (error) {
      alert(error)
    }

  }

  handleRegister = async (e) => {
    try{
      const response = await axios.post("/register", {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value
      })
      const animalResponse = await axios.get('/animals', {
        headers: {
          authorization: `Bearer ${response.data.token}`
        }
      })
      this.setState({ cuteAnimals: animalResponse.data, idCounter: this.state.cuteAnimals.length })
      this.props.history.push("/")
    }

    
    catch (error) {
      alert(error)
    }

  }

  handleClick = (e, animalId) => {
    axios.delete(`/animals/${animalId}`)
      .then(
        response => {
          this.setState({
            cuteAnimals: response.data
          });
        })
      .catch(function (error) {
        console.log(error);
      })
  }

  addNewAnimal = (e, newAnimal) => {
    e.preventDefault();
    axios.post('/animals', {
      name: newAnimal.name,
      fun_fact: newAnimal.funFact,
      location_id: parseInt(newAnimal.location)

    })
      .then(
        response => {
          this.setState({
            cuteAnimals: response.data

          })
        }
      )
      .catch(function (error) {
        console.log(error);
      })


  }

  // addNewUser = (e, newUser) => {
  //   e.preventDefault();

  //   let isUniqueName = this.state.users.find((user) => {
  //     if (user.username === newUser.username) {
  //       alert("username taken");
  //       return false;
  //     } else {
  //       return user;
  //     }
  //   })

  //   if (isUniqueName) {
  //     let newUserArr = this.state.users.slice();

  //     newUserArr.push(
  //       {
  //         ...newUser,
  //         id: this.state.userIdCounter,
  //       });
  //     this.setState({
  //       users: newUserArr,
  //       userIdCounter: this.state.userIdCounter + 1,
  //     })
  //     alert("account created!")
  //     this.props.history.push("/")
  //   }
  // }

  handleChangeEdit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newAnimals = this.state.cuteAnimals.slice();
    newAnimals.push(this.state.newAnimal)
    this.setState({
      idCounter: this.state.idCounter + 1,
      cuteAnimals: newAnimals,

    })
  }

  handleEdit = (e, animalId) => {
    let newAnimals = this.state.cuteAnimals.map(animal => {
      if (animal.id === animalId) {
        return {
          ...animal,
          edit: true
        };
      } else {
        return {
          ...animal,
          edit: false
        };
      }
    });
    this.setState({
      cuteAnimals: newAnimals
    });
  };

  handleUpdate = (e, animalId) => {
    e.preventDefault();
    axios.put(`/animals/${animalId}`, {
      name: this.state.editAnimalName,

    })
      .then(
        response => {
          this.setState({
            cuteAnimals: response.data,
          })
        }
      )
      .catch(function (error) {
        console.log(error);
      })

  }
  render() {



    return (

      <Switch>

        <Route
          exact path="/"
          render={props =>
            <div>
              <NavBar />
              <ReadAnimal
                cuteAnimals={this.state.cuteAnimals}
                handleClick={this.handleClick.bind(this)}
                handleUpdate={this.handleUpdate.bind(this)}
                handleChangeEdit={this.handleChangeEdit.bind(this)}
                handleEdit={this.handleEdit.bind(this)}
              />
              <CreateAnimal
                newAnimal={this.state.newAnimal}
                addNewAnimal={this.addNewAnimal.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClick={this.handleClick.bind(this)}
              />
            </div>
          }
        />
        <Route
          path="/login" render={props =>
            <Login
              users={this.state.users}
              handleLogin={(e) => this.handleLogin(e)}
            />
          }
        />
        <Route
          path="/register" render={props =>
            <Register
              users={this.state.users}
              handleRegister={this.handleRegister}
              
            />
          }
        />

      </Switch>


    );
  }
}

export default withRouter(App);










