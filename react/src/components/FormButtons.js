import React from 'react';

const FormButtons = props => {
  return(
    <div className="button-group">
      <button className="button" onClick={this.props.onClick} >Clear</button>
      <input className="button" type="submit" value="Submit" />
    </div>
  )
}

export default FormButtons;
