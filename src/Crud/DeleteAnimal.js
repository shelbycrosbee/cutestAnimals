import React from 'react';


class DeleteAnimal extends React.Component {


render(){

  return(
    <button
    onClick={e => this.props.handleClick(e, this.props.animalsId)} className='buttonColor'>
    REMOVE </button>
  )
}


}
export default DeleteAnimal;
