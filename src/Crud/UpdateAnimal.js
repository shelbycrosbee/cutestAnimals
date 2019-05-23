import React from 'react';

class UpdateAnimal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <span>
        <button
          onClick={(e) => this.props.handleEdit(e, this.props.animalsId)}>EDIT</button>

        {this.props.animalEdit ? (
          <form onSubmit={e => this.props.handleUpdate(e, this.props.animalsId)}>
            <input
              type="text"
              value={this.props.editAnimalName}
              placeholder={this.props.animalName}
              name="editAnimalName"
              onChange={e => this.props.handleChangeEdit(e)}
            />
          <button type="submit">Submit Change</button>
          </form>
        ) : (
            ""
          )}
      </span>


    )
  }
}
export default UpdateAnimal;