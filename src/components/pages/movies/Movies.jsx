import React, { useState, useCallback, useEffect} from 'react';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import MovieList from 'components/movieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
//import PropTypes from 'prop-types'//TODO uncoment if ready

const Movies = props => {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('querry'));
  // console.log(apiUtils.API_TRENDING());
  // console.log(movieApiLuncher(apiUtils.API_SEARCH(querry)));
  const searchForSave = useCallback(async input => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_SEARCH(input));
      // console.log(answer);
      setSearchList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get('querry')?.length > 0)
      searchForSave(searchParams.get('querry'));
  }, [searchParams, searchForSave]);

  return (
    <div className={css.movies}>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
          setSearchParams({ querry: e.target[0].value });
        }}
      >
        <input type="text" name="querry"/>
        <button type="submit">Search</button>
      </form>
      <MovieList movieList={searchList} />
    </div>
  );
};

//Movies.propTypes = {}//TODO define proptypes

export default Movies;
