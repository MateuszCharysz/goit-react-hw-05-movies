import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const AdditionalInfo = props => {
  return (
    <div>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

// AdditionalInfo.propTypes = {}

export default AdditionalInfo;
