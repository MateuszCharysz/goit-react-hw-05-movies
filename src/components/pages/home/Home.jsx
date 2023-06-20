import React from 'react';
// import PropTypes from 'prop-types' //TODO uncoment if ready
import MovieList from 'components/movieList/MovieList';

const Home = ({ trendingList }) => {
  return (
    <>{<MovieList trendingList={trendingList} />}</>
  );
};

// Home.propTypes = {}//TODO define proptypes

export default Home;
