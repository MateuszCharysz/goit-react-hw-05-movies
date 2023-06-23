import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { internalBtmBorder } from 'components/sharedLayout/SharedLayout';
// import PropTypes from 'prop-types'

const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional Information</h4>
      <ul style={internalBtmBorder}>
        <li>
          <Link to={'cast'}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

// AdditionalInfo.propTypes = {}

export default AdditionalInfo;
        // <li>
        //   <Link to={'cast'} state={locationState}>
        //     Cast
        //   </Link>
        // </li>
        // <li>
        //   <Link to={'reviews'} state={locationState}></Link>