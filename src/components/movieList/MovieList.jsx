import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const MovieList = ({ trendingList }) => {
  return (
    <>
      <ul>
        {trendingList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={'/movies:movieid'}>{title !== null ? title : name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// MovieList.propTypes = {}

export default MovieList;
