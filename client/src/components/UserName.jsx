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
      <div className="form-group">
        <label htmlFor="username">UserName</label>
        <input type="text" className="form-control" id="username" name="username" onChange={props.handleChange} required />
      </div>

      <FormDiv
        handleChange={props.handleChange}
        label="Email Address"
        name="email"
        type="email"
      />
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" onChange={props.handleChange} required />
      </div>

      <FormDiv
        handleChange={props.handleChange}
        label="Password"
        name="password"
        smallText="Password must contain at least 10 characters"
      />
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" minLength="10" name="password" onChange={props.handleChange} required />
        <small className="form-text text-muted">Password must contain at least 10 characters</small>
      </div>
      <SaveButton />
    </form>
  );
}

export default UserName;
