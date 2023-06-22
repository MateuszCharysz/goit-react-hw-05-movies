import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'//TODO define PROPTYPES !!!

const MovieList = ({ movieList }) => {
  return (
    <>
      <ul>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title !== null ? title : name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// MovieList.propTypes = {}

export default MovieList;
