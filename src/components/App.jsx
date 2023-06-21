import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import SharedLayout from './sharedLayout/SharedLayout';
import { movieApiLuncher } from 'service/movieApiLuncher';
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
      console.log(answer);
      setTrendList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    dataForSave();
  }, [dataForSave]);
  console.log(trendList);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingList={trendList} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home trendingList={trendList} />} />
        </Route>
      </Routes>
    </>
  );
};
