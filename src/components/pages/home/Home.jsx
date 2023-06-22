import React from 'react';
import css from './Home.module.css'
// import PropTypes from 'prop-types' //TODO uncoment if ready
import MovieList from 'components/movieList/MovieList';

const Home = ({ trendingList }) => {
  return (
    <div className={css.home}>
      <h2>Trending today</h2>
      {<MovieList movieList={trendingList} />}
    </div>
  );
};

// Home.propTypes = {}//TODO define proptypes

export default Home;
