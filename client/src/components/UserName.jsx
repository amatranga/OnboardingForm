import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FormDiv from './FormDiv';
import SaveButton from './SaveButton';

class UserName extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.redirect();
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormDiv
          handleChange={this.props.handleChange}
          label="UserName"
          name="username"
          type="text"
        />

        <FormDiv
          handleChange={this.props.handleChange}
          label="Email Address"
          name="email"
          type="email"
        />

        <FormDiv
          handleChange={this.props.handleChange}
          label="Password"
          name="password"
          type="password"
          smallText="Password must contain at least 10 characters"
        />

        <SaveButton next={this.props.next} />
      </form>
    );
  }
}

export default UserName;
