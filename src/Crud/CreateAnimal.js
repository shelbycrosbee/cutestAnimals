import React from 'react';
import axios from 'axios'
class CreateAnimal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newAnimal: {
        name: "",
        funFact: "",
        location: 1
      },
      locations: []
    }
  }
  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post("/animals", {
  //     name: this.state.name,
  //     loc:
  //     fun:
  //     animals: parseInt(this.state.animal)
  //   }) .then(response => {
  //     this.setState({
  
  //     })
  //   })
  componentDidMount() {
    axios.get('/locations')

      .then(response => {

        this.setState({ locations: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
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
  addNewLocation = newLocation => this.setState(
    {
      newAnimal: {
        ...this.state.newAnimal,
        location: newLocation
      }
    }
  )

  handleClear(e, animal) {
    this.setState({
      newAnimal: {
        name: "",
        funFact: "",
        location: 1
      }
    })
    this.props.addNewAnimal(e, animal)
  }

  render() {
    const locations = this.state.locations.map((location) => <option key={location.id} value={location.id}>{location.name}</option>)

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
          <select onChange={e => this.addNewLocation(e.target.value)}>
            {locations}
          </select>
        </label>
        <button onClick={e => this.handleClear(e, this.state.newAnimal)} className='buttonColor'> ADD </button>
      </form>);
  }
}

export default CreateAnimal;