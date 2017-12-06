import React from 'react';

const VenueShowTile = props => {
  return(
    <div>
      <img src={props.imageUrl}/>
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <br/>
      <p>{props.website}</p>
      <p>{props.ageRestriction}</p>
      <p>{props.foodOptions}</p>
      <p>{props.parking}</p>
      <p>{props.hours}</p>
      <p>{props.phone}</p>
      <p>{props.dressCode}</p>
      <p>{props.coverCharge}</p>
      <p>{props.cashOnly}</p>
    </div>
  )
}

export default VenueShowTile;
