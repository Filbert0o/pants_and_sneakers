import React from 'react';

const VenueShowTile = props => {
  return(
    <div>
      <img className='show-img' src={props.imageUrl}/>
      <h1 className='title-show'>{props.name}</h1>
      <div className='row'>
        <div className='important_info six columns'>
          <h4>Address:</h4>
          <p>{props.address}</p>
          <p>{props.city}, {props.state}., {props.zip}</p>
          <h4>Contact Info:</h4>
          <p>Website: {props.website}</p>
          <p>Phone Number: {props.phone}</p>
          <p>Hours: {props.hours}</p>
        </div>
        <div className='important_info six columns'>
          <h4>Venue Info:</h4>
          <p>Age Restriction: {props.ageRestriction}</p>
          <p>Food: {props.foodOptions}</p>
          <p>Parking: {props.parking}</p>
          <p>Dress Code: {props.dressCode}</p>
          <p>Cover Charge: {props.coverCharge}</p>
          <p>Cash Only: {props.cashOnly}</p>
        </div>
      </div>
    </div>
  )
}

export default VenueShowTile;
