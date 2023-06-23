import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import css from './Cast.module.css';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const Cast = props => {
  const { movieId } = useParams();
 
  const [castData, setCastData] = useState([]);
  const creditsData = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_CREDITS(movieId));
      // console.log(answer);
      // console.log(answer.data.cast);
      setCastData(answer.data.cast);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => {
    creditsData();
  }, [creditsData]);
  // console.log(castData);
  // console.log(movieId);
  return (
    <ul className={css.cast}>
      {castData.map(({ character, id, name, profile_path }) => (
        <li key={id} className={css.cast__item}>
          {' '}
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={`of ${name}`}
            className={css.cast__img}
          />
          <p className={css.cast__dot}>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

//Cast.propTypes = {}TODO define proptypes

export default Cast;
