import React from 'react';

const SelectField = props =>{

  let multipleOptions = props.options.map((option, index) => {
    return <option key={index} value={option}>{option}</option>
  })

  return(
    <label>{props.label}
      <select name={props.name} value={props.content} onChange={props.onChange}>
        <option value=''>Choose {props.label}</option>
        {multipleOptions}
      </select>
    </label>
  );
}

export default SelectField;
