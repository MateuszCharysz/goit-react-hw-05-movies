import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const Cast = props => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState();
  const creditsData = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_CREDITS(movieId));
      console.log(answer)
      setCastData(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);
  useEffect(() => creditsData, [castData, creditsData]);
  console.log(castData);
  console.log(movieId);
  return <div>Cast</div>;
};

//Cast.propTypes = {}TODO define proptypes

export default Cast;
