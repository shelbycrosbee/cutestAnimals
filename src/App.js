import React from 'react';
import './App.css';

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
      newAnimal: {
        name: "",
        funFact: ""
      }
    }
  }

  handleClick = (e, animalsId) => {
    let newCuteAnimals = this.state.cuteAnimals.filter((animal) => animal.id !== animalsId)
    this.setState({ cuteAnimals: newCuteAnimals });
  }

  handleChange = (e) => {
    this.setState({
      newAnimal: {
        ...this.state.newAnimal,
        [e.target.name]: e.target.value,
        id: this.state.idCounter,
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newAnimals = this.state.cuteAnimals.slice();
    newAnimals.push(this.state.newAnimal)
    this.setState({
      idCounter: this.state.idCounter + 1,
      cuteAnimals: newAnimals,
      newAnimal: {
        name: "",
        funFact: ""
      }
    })
  }

  render() {
    const cuteAnimals = this.state.cuteAnimals.map((animal) =>
      <li key={animal.id}>
        {animal.name}<button onClick={(e) => this.handleClick(e, animal.id)} className='buttonColor'>
          KIDNAP </button>
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Another Animal:
          <input name="name" type="text" value={this.state.newAnimal.name} onChange={this.handleChange} placeholder="type animal here" />
          </label>
          <label>
            Another Fun Fact:
          <input name="funFact" type="text" value={this.state.newAnimal.funFact} onChange={this.handleChange} placeholder="type fact here" />
          </label>
          <button onClick={(e) => this.handleClick(e)} className='buttonColor'> ADD </button>

        </form>
      </div>
    );
  }
}

export default App;
