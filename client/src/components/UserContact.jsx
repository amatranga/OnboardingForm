import React from 'react';
import FormDiv from './FormDiv';
import SaveButton from './SaveButton';

const UserContact = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormDiv
        handleChange={props.handleChange}
        label="First Name"
        name="firstname"
        type="text"
      />
      <FormDiv
        handleChange={props.handleChange}
        label="Last Name"
        name="lastname"
        type="text"
      />
      <FormDiv
        handleChange={props.handleChange}
        label="Phone Number"
        name="phonenumber"
        type="tel"
      />
      <SaveButton />
    </form>
  );
}

export default UserContact;
