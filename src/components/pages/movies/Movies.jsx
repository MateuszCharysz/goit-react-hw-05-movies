import React, { useState, useCallback, useEffect } from 'react';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import MovieList from 'components/movieList/MovieList';
//import PropTypes from 'prop-types'//TODO uncoment if ready

const Movies = props => {
  const [searchList, setSearchList] = useState([]);
  const [querry, setQuerry] = useState('')
  // console.log(apiUtils.API_TRENDING());
  // console.log(movieApiLuncher(apiUtils.API_TRENDING()));
  const searchForSave = useCallback(async input => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_SEARCH(input));
      // console.log(answer);
      setSearchList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const submitSearch = e => {
    e.preventDefault();
    console.log(e.target);
    setQuerry(e.target.value)
  };
  return (
    <div>
      <form onSubmit={() => submitSearch()}>
        <input type="text" name={querry} id="" />
        <button type='submit'>Search</button>
      </form>
      <MovieList movieList={searchList} />
    </div>
  );
};

//Movies.propTypes = {}//TODO define proptypes

export default Movies;
