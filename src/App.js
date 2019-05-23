import React from 'react';
import './App.css';
import CreateAnimal from './Crud/CreateAnimal'
import UpdateAnimal from './Crud/UpdateAnimal';
import DeleteAnimal from './Crud/DeleteAnimal';
// import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCounter: 6,
      cuteAnimals:
        [
          {
            id: 0,
            cutenessLevel: "Very",
            name: "Ducklings",
            funFact: "Ducks are omnivores",

          },
          {
            id: 1,
            cutenessLevel: "Extremely",
            name: "Puppies",
            funFact: "Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.",
          },
          {
            id: 2,
            cutenessLevel: "Pretty cute",
            name: "Giraffes",
            funFact: "Giraffes spend 16-20 hours a day feeding",
          },
          {
            id: 3,
            cutenessLevel: "Super",
            name: "Sea Otters",
            funFact: "Sea otters wrap their babies around giant kelp",
          },
          {
            id: 4,
            cutenessLevel: "Homely",
            name: "Condors",
            funFact: "Males mate for life, females find other mates when the males die",
          },
          {
            id: 5,
            cutenessLevel: "Super Duper",
            name: "Pandas",
            funFact: "An adult panda can eat 12-38 kilos of bamboo per day"
          }

        ],
      editAnimalName: "",
    }
  }

  handleClick = (e, animalId) => {
    let newCuteAnimals = this.state.cuteAnimals.filter((animal) => animal.id !== animalId)
    this.setState({
      cuteAnimals: newCuteAnimals
    });
  }

  addNewAnimal = (e, newAnimal) => {
    e.preventDefault();
    let newAnimalList = this.state.cuteAnimals.slice();
    newAnimalList.push(
      {
        ...newAnimal,
        id: this.state.idCounter,
      }
    )
    this.setState({
      cuteAnimals: newAnimalList,
      idCounter: this.state.idCounter + 1,
    });
  }

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
    let newAnimals = this.state.cuteAnimals.map(animal => {
      if (animal.id === animalId) {
        return {
          ...animal,
          name: this.state.editAnimalName,
          edit: false
        };
      } else {
        return {
          ...animal
        };
      }
    });
    this.setState({
      cuteAnimals: newAnimals
    });
  };

  render() {
    
    const cuteAnimals = this.state.cuteAnimals.map((animal) =>
      <li key={animal.id}>
        {animal.name}

        <DeleteAnimal
          handleClick={this.handleClick.bind(this)}
          animalsId={animal.id}
        />

        <UpdateAnimal
          handleEdit={this.handleEdit.bind(this)}
          handleChangeEdit={this.handleChangeEdit.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
          animalsId={animal.id}
          animalEdit={animal.edit}
          animalName={animal.name}
        />

        <ul>
          <li>
            {animal.funFact}
          </li>
        </ul>
      </li>
    );
    return (
      <div>
        <ul>{cuteAnimals}</ul>

        <CreateAnimal
          newAnimal={this.state.newAnimal}
          addNewAnimal={this.addNewAnimal.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          handleClick={this.handleClick.bind(this)}
        />

      </div>
    );
  }
}

export default App;
