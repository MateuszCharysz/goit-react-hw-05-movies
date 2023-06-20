import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const SharedLayout = props => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

// SharedLayout.propTypes = {}

export default SharedLayout;
