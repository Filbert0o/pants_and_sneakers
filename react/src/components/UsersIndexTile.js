import React from 'react';
import { Link } from 'react-router';

const UsersIndexTile = props =>{
  let onDelete = () => {
    props.onDelete(props.id)
  }

  return(
    <div className='callout'>
      <p>{`Name: ${props.firstName} ${props.lastName}`}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
      <button className='button' onClick={onDelete}>Delete {props.firstName}</button>
    </div>
  )
}

export default UsersIndexTile;
