import React from 'react';

import LandingPage from './LandingPage';
import UserName from './UserName';
import UserContact from './UserContact';
import UserAddress from './UserAddress';

class OnboardingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      telephone: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const info = this.state;
    info[e.target.name] = e.target.id;
  }

  handleSubmit(e) {
    console.log(this.state, 'Submitted State');
    e.preventDefault();
    console.log('Saving to DB now');
  }

  render() {
    const path = this.props.location.pathname;
    if (path === '/') {
      return (
        <LandingPage next="/username" />
      );
    }
    if (path === '/username') {
      return (
        <UserName
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          next="/usercontact" />
      );
    }
    if (path === '/usercontact') {
      return (
        <UserContact
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          next="useraddress" />
      );
    }
    if (path === '/useraddress') {
      return (
        <UserAddress
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          next="/" />
      );
    }
  }
}

export default OnboardingForm;
