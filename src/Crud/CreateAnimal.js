import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

class CreateAnimal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newAnimal: {
        name: "",
        funFact: ""
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

  render() {
    return (
      <form style={{ marginLeft: "2em" }}>
        <label> Add New</label>
        <TextField
          name="name"
          type="text"
          onChange={e => this.addNewName(e.target.value)}
          placeholder="  animal" />


        <TextField
          name="funFact"
          type="text"
          onChange={e => this.addNewFact(e.target.value)}
          placeholder="fun fact" />

        <Button onClick={e => this.props.addNewAnimal(e, this.state.newAnimal)} className='buttonColor'> ADD </Button>
      </form>);
  }
}

export default CreateAnimal;