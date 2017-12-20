import React from 'react';
import FormDiv from './FormDiv';
import SaveButton from './SaveButton';

class UserContact extends React.Component {
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
          label="First Name"
          name="firstname"
          type="text"
        />
        <FormDiv
          handleChange={this.props.handleChange}
          label="Last Name"
          name="lastname"
          type="text"
        />
        <FormDiv
          handleChange={this.props.handleChange}
          label="Phone Number"
          name="phonenumber"
          type="tel"
        />
        <SaveButton next={this.props.next} />
      </form>
    );
  }
}

export default UserContact;
