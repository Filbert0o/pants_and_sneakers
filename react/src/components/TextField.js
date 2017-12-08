import React from 'react';

const TextField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.onChange}
      />
    </label>
  );
}

export default TextField;
