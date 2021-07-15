import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, About, Contact } from './pages/index';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.ABOUT}>
        <About />
      </Route>
      <Route exact path={ROUTES.CONTACT}>
        <Contact />
      </Route>

    </Router>
  );
}

export default App;
