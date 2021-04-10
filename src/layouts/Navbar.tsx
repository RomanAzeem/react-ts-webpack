import * as React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">VIDEO GAMES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {};
