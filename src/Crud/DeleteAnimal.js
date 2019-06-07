import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class DeleteAnimal extends React.Component {


  render() {

    return (
      <IconButton onClick={e => this.props.handleClick(e, this.props.animalsId)} className='buttonColor' aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    )
  }


}
export default DeleteAnimal;
