import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const MovieDetails = props => {
  const { movieId } = useParams();
  const [movieIdData, setMovieIdData] = useState({});
  const [movieIdDataDetails, setMovieIdDataDetails] = useState({});
  const [searchParams] = useSearchParams()
  console.log(searchParams)
  const dataMovieDetails = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_ID(movieId));
      setMovieIdData(answer.data.id);
      setMovieIdDataDetails(answer.data)
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => {
    if (movieId !== movieIdData)
    dataMovieDetails();
  }, [dataMovieDetails, movieId, movieIdData]);
  console.log(movieIdData);
  console.log(movieIdDataDetails);
  return <div>MovieDetails{movieId}</div>;
};

//MovieDetails.propTypes = {}//TODO define proptypes

export default MovieDetails;
