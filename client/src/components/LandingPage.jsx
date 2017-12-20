import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <React.Fragment>
      <div className="col-12 text-center">
        <h2>Welcome to our Onboarding Process!</h2>
      </div>
      <div className="col-12 text-center">
        <Link to={props.next}>Click here to begin</Link>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
