import React from 'react';
import axios from 'axios';
import './App.css';
import CreateAnimal from './Crud/CreateAnimal';
import ReadAnimal from './Crud/ReadAnimal';
import Login from './Login';
import Register from './Register';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

// https://gist.github.com/krambertech/76afec49d7508e89e028fce14894724c
// handleKeyDown(e) {
//   if (e.keyCode === ENTER_KEY) {
//        clearTimeout(this.timer);
//       ::this.triggerChange();
//   }
// }
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
      users: [
        {
          id: 0,
          username: "Sara",
          password: "sara",
          tel: ""
        },
        {
          id: 1,
          username: "Chris",
          password: "chris",
          tel: ""
        },
        {
          id: 2,
          username: "Shelby",
          password: "shelby",
          tel: ""
        }
      ]
    }
  }
  componentDidMount() {
    axios.get('/animals', {
      headers: {
        authorization: 'Bearer 070f48225bb37ef29c2a487f2fb2a71dIXbWM7lYVEyQjMcCt4uh5WPqjGKAOgQMRLqDpPPfigCT85Ghd2oeC69lqgn04he9'
      }
    })

      .then(response => {

        this.setState({ cuteAnimals: response.data, idCounter: this.state.cuteAnimals.length })
      })
      .catch(function (error) {
        console.log(error);
      })
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
            cuteAnimals: response.data,
          })
        }
      )
      // animals: parseInt(this.state.animal)
      // //   }) .then(response => {
      // //     this.setState({
      .catch(function (error) {
        console.log(error);
      })


  }

  addNewUser = (e, newUser) => {
    e.preventDefault();
   
    let newUserArr = this.state.users.slice();

    newUserArr.push(
      {
        ...newUser,
        id: this.state.userIdCounter,
      });
    this.setState({
      users: newUserArr,
      userIdCounter: this.state.userIdCounter + 1,
    })
    alert("account created!")
    this.props.history.push("/")
    // }
  }

  handleChangeEdit = (e, animalsId) => {
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
    
  };

  render() {



    return (

      <Switch>
        <Route
          exact path="/"
          render={props =>
            <div>
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
            />
          }
        />
        <Route
          path="/register" render={props =>
            <Register
              users={this.state.users}
              addNewUser={this.addNewUser.bind(this)}
            />
          }
        />

      </Switch>


    );
  }
}

export default withRouter(App);










