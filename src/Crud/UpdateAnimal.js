import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UpdateAnimal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <span>
        <Button
          onClick={(e) => this.props.handleEdit(e, this.props.animalId)}>Edit</Button>

        {this.props.animalEdit ? (
          <form onSubmit={e => this.props.handleUpdate(e, this.props.animalId)}>
            <TextField
              id="outlined-name"
              value={this.props.editAnimalName}
              placeholder={this.props.animalName}
              name="editAnimalName"
              margin="normal"
              variant="outlined"
              onChange={e => this.props.handleChangeEdit(e)}
            />
          <Button type="submit" style={{margin: "1.6em .6em"}}>Submit</Button>
          </form>
        ) : (
            ""
          )}
      </span>


    )
  }
}
export default UpdateAnimal;