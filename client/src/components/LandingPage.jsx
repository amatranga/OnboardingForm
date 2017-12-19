import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h2>Welcome to our Onboarding Process!</h2>
      </div>
      <div className="col-12">
        <Link to={props.next}>Click here to begin</Link>
      </div>
    </div>
  );
}

export default LandingPage;
