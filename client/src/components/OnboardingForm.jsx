import React from 'react';
import { Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import UserName from './UserName';
import UserContact from './UserContact';
import UserAddress from './UserAddress';

class OnboardingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      telephone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillMount() {
    this.setState({fireRedirect: false});
  }

  handleChange(e) {
    const info = this.state;
    info[e.target.name] = e.target.value;
  }

  handleSubmit(e) {
    const info = this.state;
    e.preventDefault();
    this.setState({fireRedirect: true});
    if (this.state.firstname === '') {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
      })
        .then(res => {
          const location = this.props.location.pathname;
          console.log(location);
          console.log(res.status);
          if (res.status === 200) {
            if (location === '/username') {
              console.log('going to usercontact');
              return <Redirect to='/usercontact' />;
            }
            if (location === '/usercontact') {
              console.log('going to useraddress');
              return (
                <Redirect to='/useraddress' />
              );
            }
            if (location === '/useraddress') {
              console.log('going to /');
              return (
                <Redirect to='/' />
              );
            }
          }
        })
        .catch(err => {
          console.error(err, 'ERROR posting to api');
        });
    } else {
      fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
      })
        .then(res => {
          console.log('RES');
        })
        .catch(err => {
          console.error(err, 'ERROR posting to api');
        });
    }
  }

  redirect() {
    this.setState({fireRedirect: false});
  }

  render() {
    const path = this.props.location.pathname;
    const { fireRedirect } = this.state;
    if (path === '/') {
      return (
        <LandingPage next="/username" />
      );
    }
    if (path === '/username') {
      return (
        <React.Fragment>
          <UserName
            errorMessage={this.state.errorMessage}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            next="/usercontact"
            redirect={this.redirect} />
          {fireRedirect && (
            <Redirect to="/usercontact" />
          )}
        </React.Fragment>
      );
    }
    if (path === '/usercontact') {
      return (
        <React.Fragment>
          <UserContact
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            next="/useraddress"
            redirect={this.redirect} />
          {fireRedirect && (
            <Redirect to="/useraddress" />
          )}
        </React.Fragment>
      );
    }
    if (path === '/useraddress') {
      return (
        <React.Fragment>
          <UserAddress
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            next="/logout"
            redirect={this.redirect} />
          {fireRedirect && (
            <Redirect to="/" />
          )}
        </React.Fragment>
      );
    }
  }
}

export default OnboardingForm;
