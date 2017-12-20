import React from 'react';

const FormDiv = props => {
  if (props.label !== 'Password') {
    return (
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className="form-control" id={props.name} name={props.name} onChange={props.handleChange} required />
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className="form-control" id={props.name} minLength="10" name={props.name} onChange={props.handleChange} required />
        <small className="form-text text-muted">{props.smallText}</small>
      </div>
    );
  }
};

export default FormDiv;
