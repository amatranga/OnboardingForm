import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import OnboardingForm from './OnboardingForm';

const AllRoutes = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center main">
        <Router>
          <Switch>
            <Route path="*" component={OnboardingForm} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default AllRoutes;
