import React from 'react';

class CreateAnimal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newAnimal: {
        name: "",
        funFact: "",
        location: ""
      }
    }
  }

  addNewName = newName => this.setState(
    {
      newAnimal: {
        ...this.state.newAnimal,
        name: newName
      }
    }
  )
  addNewFact = newFact => this.setState(
    {
      newAnimal: {
        ...this.state.newAnimal,
        funFact: newFact
      }
    }
  )
 

  handleClear(e, animalName) {
    this.setState({
      newAnimal: {
        name: "",
        funFact: ""
      }
    })
    this.props.addNewAnimal(e, animalName)
  }

  render() {
    return (
      <form>
        <label>
          Another Animal and Fun Fact:
        <input
            name="name"
            type="text"
            onChange={e => this.addNewName(e.target.value)}
            placeholder="animal"
            value={this.state.newAnimal.name}
          />
        </label>
        <label>

          <input
            name="funFact"
            type="text"
            onChange={e => this.addNewFact(e.target.value)}
            placeholder="fun fact"
            value={this.state.newAnimal.funFact}
          />
        
        </label>
        <button onClick={e => this.handleClear(e, this.state.newAnimal)} className='buttonColor'> ADD </button>
      </form>);
  }
}

export default CreateAnimal;