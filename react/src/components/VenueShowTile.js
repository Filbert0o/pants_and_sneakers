import React from 'react';

const VenueShowTile = props => {
  let background = {
    backgroundImage: "url(" + props.imageUrl + ')',
    backgroundPosition: "center center",
    backgroundSize: "100%",
  }

  return(
    <div className=''>
      <div className='venue-header clearfix' style={ background }>
        <div className='venue-details'>
          <h1 className='title-show clearfix'>{props.name}</h1>
          <hr/>
            <div className='info-column'>
              <h4>Address:</h4>
              <p>{props.address}<br/>
              {props.city}, {props.state}., {props.zip}</p>
              <h4>Contact Info:</h4>
              <p>Website: {props.website}</p>
              <p>Phone Number: {props.phone}</p>
              <p>Hours: {props.hours}</p>
            </div>
            <div className='info-column'>
              <h4>Venue Info:</h4>
              <p>Age Restriction: {props.ageRestriction}</p>
              <p>Food: {props.foodOptions}</p>
              <p>Parking: {props.parking}</p>
              <p>Dress Code: {props.dressCode}</p>
              <p>Cover Charge: {props.coverCharge}</p>
              <p>Cash Only: {props.cashOnly}</p>
            </div>
        </div>
        <div className='cf'></div>
      </div>
    </div>
  )
}

export default VenueShowTile;
