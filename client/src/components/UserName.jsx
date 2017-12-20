import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FormDiv from './FormDiv';
import SaveButton from './SaveButton';

const UserName = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormDiv
        handleChange={props.handleChange}
        label="UserName"
        name="username"
        type="text"
      />

      <FormDiv
        handleChange={props.handleChange}
        label="Email Address"
        name="email"
        type="email"
      />

      <FormDiv
        handleChange={props.handleChange}
        label="Password"
        name="password"
        smallText="Password must contain at least 10 characters"
      />

      <SaveButton />
    </form>
  );
};

export default UserName;
