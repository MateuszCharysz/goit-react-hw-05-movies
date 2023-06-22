import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
// import PropTypes from 'prop-types'
export const internalBtmBorder = { borderBottom: '1px solid grey', paddingBottom: 10 }

const SharedLayout = props => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

// SharedLayout.propTypes = {}

export default SharedLayout;
