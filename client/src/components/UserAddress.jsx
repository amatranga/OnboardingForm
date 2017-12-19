import React from 'react';
import FormDiv from './FormDiv';
import SaveButton from './SaveButton';

const UserContact = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormDiv
        handleChange={props.handleChange}
        label="Street Address"
        name="street"
        type="text"
      />
      <FormDiv 
        handleChange={props.handleChange}
        label="City"
        name="city"
        type="text"
      />
      <FormDiv
        handleChange={props.handleChange}
        label="State"
        name="state"
        type="text"
      />
      <FormDiv
        handleChange={props.handleChange}
        label="Zip Code"
        name="zip"
        type="number"
      />
      <SaveButton />
    </form>
  );
}

export default UserContact;
