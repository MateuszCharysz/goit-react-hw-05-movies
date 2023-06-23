import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import css from './MovieDetails.module.css';

import AdditionalInfo from 'components/additionalInfo/AdditionalInfo';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const MovieDetails = props => {
  const location = useLocation();
  const goBackRefHome = location.state?.from ?? '/'
  const goBackRefMovies = location.state?.from ?? '/movies';
  const navigate = useNavigate();
  console.log(location);
  console.log(goBackRefMovies);
  const { movieId } = useParams();
  const [movieIdData, setMovieIdData] = useState('');
  const [movieIdDataDetails, setMovieIdDataDetails] = useState({});
  //   console.log(movieId);
  // console.log(movieApiLuncher(apiUtils.API_ID(movieId)));
  const dataMovieDetails = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_ID(movieId));
      // console.log(answer);
      setMovieIdData(answer.data.id);
      setMovieIdDataDetails(answer.data);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  const goBackHandler = () => {
    if (goBackRefHome)
      return navigate('/');
    if (goBackRefMovies)
      return navigate('/movies');
    
  };

  useEffect(() => {
    if (movieId !== movieIdData) dataMovieDetails();
  }, [dataMovieDetails, movieId, movieIdData]);
  // console.log(movieIdData);
  // console.log(movieIdDataDetails);

  return (
    // TODO make button component, poster Path to check, genres with space
    <div className={css.movie}>
      {movieIdData !== '' ? (
        <>
          <button type="button" onClick={() => goBackHandler()}>
            Go back
          </button>
          <div className={css.movie__item}>
            <img
              className={css.movie__img}
              src={`https://image.tmdb.org/t/p/w500/${movieIdDataDetails.poster_path}`}
              alt={`${movieIdDataDetails.tagline}`}
            />
            <div>
              <h2>{movieIdDataDetails.original_title}</h2>
              <p>User score: {movieIdDataDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieIdDataDetails.overview}</p>
              <h3>Genres</h3>
              <p>
                {movieIdDataDetails.genres.map(({ id, name }) => `${name} `)}
              </p>
            </div>
          </div>
          <AdditionalInfo state={{ from: location }} />
        </>
      ) : (
        <p>Loding</p>
      )}
    </div>
  );
};

//MovieDetails.propTypes = {}//TODO define proptypes

export default MovieDetails;