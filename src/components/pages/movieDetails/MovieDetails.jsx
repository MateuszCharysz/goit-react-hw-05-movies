import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import MOVIE_ID from 'service/fakeApiByID';
import AdditionalInfo from 'components/additionalInfo/AdditionalInfo';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const MovieDetails = props => {
  const { movieId } = useParams();
  const [movieIdData, setMovieIdData] = useState({});
  const [movieIdDataDetails, setMovieIdDataDetails] = useState({});
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const dataMovieDetails = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_ID(movieId));
      setMovieIdData(answer.data.id);
      setMovieIdDataDetails(answer.data);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => {
    if (movieId !== movieIdData) dataMovieDetails();
  }, [dataMovieDetails, movieId, movieIdData]);
  console.log(movieIdData);
  console.log(movieIdDataDetails);
  return (
    // TODO make button component, poster Path to check, genres with space
    <div>
      <button type="button">Go back</button>
      {/* <img src='' alt=''/>  */}
      <h2>{MOVIE_ID.original_title}</h2>
      <p>User score: {MOVIE_ID.vote_average}</p>
      <h3>Overview</h3>
      <p>{MOVIE_ID.overview}</p>
      <h3>Genres</h3>
      <p>{MOVIE_ID.genres.map(({ id, name }) => name)}</p>
      MovieDetails{movieId}
      <AdditionalInfo />
    </div>
  );
};

//MovieDetails.propTypes = {}//TODO define proptypes

export default MovieDetails;
