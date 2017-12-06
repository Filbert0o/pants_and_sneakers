import React from 'react';
import { browserHistory, Link } from 'react-router';

const VenuesIndexTile = props => {

  return(
    <div>
      <img src={props.imageUrl}/>
      <h1><Link to={`/venues/${props.id}`}>{props.name}</Link></h1>
      <h3>{props.address}</h3>
      <h3>{props.city}</h3>
      <h3>{props.state}</h3>
      <h3>{props.zip}</h3>
    </div>

  )
}

export default VenuesIndexTile;
