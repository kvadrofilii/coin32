import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './layouts/Wrapper';
import { useDispatch } from 'react-redux';
import { getGames } from './app/reducers/games';
import GameListPage from './pages/GameListPage';
import GameProfilePage from './pages/GameProfilePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page_size=20&page=1'));
  }, [dispatch]);

  return (
    <Routes>
      <Route path={'/'} element={<Wrapper />} >
        <Route index element={<GameListPage />} />
        <Route path={'game/:slug'} element={<GameProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
