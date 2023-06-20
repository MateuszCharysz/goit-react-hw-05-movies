import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import SharedLayout from './sharedLayout/SharedLayout';
import { movieApiLuncher } from 'service/api';
import apiUtils from 'service/apiUtils';
import React, { useEffect, useState, useCallback } from 'react';
// import MOVIES from 'service/fakeApi';

export const App = () => {
  const [trendList, setTrendList] = useState([]);
  // console.log(apiUtils.API_TRENDING());
  // console.log(movieApiLuncher(apiUtils.API_TRENDING()));
  const dataForSave = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_TRENDING());
      setTrendList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    dataForSave();
  }, [dataForSave]); //TODO put TMDB API trending search
  console.log(trendList);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingList={trendList} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies:movieid" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
