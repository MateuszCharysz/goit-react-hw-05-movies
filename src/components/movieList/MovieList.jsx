import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'//TODO define PROPTYPES !!!

const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title !== null ? title : name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// MovieList.propTypes = {}

export default MovieList;
