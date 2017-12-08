import React from 'react';
import { Link } from 'react-router';

const VenuesIndexTile = props => {

  let background = {
    backgroundImage: "url(" + props.imageUrl + ')',
    backgroundPosition: "center center",
    backgroundSize: "100%",
  }

  return(
    <div className='venue-tile' style={ background }>
      <div className='tile-info'>
        <Link to={`/venues/${props.id}`}><h2>{props.name}</h2></Link>
        <ul>
          <li>{props.address}</li>
          <li>{props.city}, {props.state} {props.zip}</li>
        </ul>
      </div>
    </div>

  )
}

export default VenuesIndexTile;
