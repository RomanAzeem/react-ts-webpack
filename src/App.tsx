import * as React from 'react';
import './css/style.scss';
import { Navbar } from './layouts/Navbar';
import { VideoGames } from './containers/VideoGames';
import { Contact } from './containers/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="showcase">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <VideoGames />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
