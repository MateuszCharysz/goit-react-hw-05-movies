import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
//import PropTypes from 'prop-types'//TODO uncoment if ready

const Reviews = props => {
  const { movieId } = useParams();
  const [revData, setRevData] = useState([]);
  const reviewsData = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_REVIEWS(movieId));
      setRevData(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);
  useEffect(() => reviewsData, [reviewsData]);
  console.log(revData);
  return (
    <ul>
      {revData.length > 0 ? (
        revData.map(({ author, content, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

//Reviews.propTypes = {}//TODO define proptypes

export default Reviews;

// try {
//   const answer = await movieApiLuncher(apiUtils.API_ID(movieId));
//   setMovieIdData(answer.data.id);
//   setMovieIdDataDetails(answer.data);
// } catch (err) {
//   console.log(err);
// }
