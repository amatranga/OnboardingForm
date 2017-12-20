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
          label="Street Address"
          name="street"
          type="text"
        />
        <FormDiv
          handleChange={this.props.handleChange}
          label="City"
          name="city"
          type="text"
        />
        <FormDiv
          handleChange={this.props.handleChange}
          label="State"
          name="state"
          type="text"
        />
        <FormDiv
          handleChange={this.props.handleChange}
          label="Zip Code"
          name="zip"
          type="number"
        />
        <SaveButton next={this.props.next} />
      </form>
    );
  }
}

export default UserContact;
