import React from 'react';
import UpdateAnimal from './UpdateAnimal';
import DeleteAnimal from './DeleteAnimal';




class ReadAnimal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const cuteAnimals = this.props.cuteAnimals.map((animal) =>
      <li key={animal.id} className="font">
        {animal.name}

        <DeleteAnimal
          handleClick={this.props.handleClick.bind(this)}
          animalId={animal.id}
        />

        <UpdateAnimal
          handleEdit={this.props.handleEdit.bind(this)}
          handleChangeEdit={this.props.handleChangeEdit.bind(this)}
          handleUpdate={this.props.handleUpdate.bind(this)}
          animalId={animal.id}
          animalEdit={animal.edit}
          animalName={animal.name}
        />
       <ul>
          <li className="font">
            {animal.fun_fact}
          </li>
          <li>{animal.location.name}</li>
        </ul>
      </li >
    );
    return (
      <ul>{cuteAnimals}</ul>
    )



  }

}

export default ReadAnimal

