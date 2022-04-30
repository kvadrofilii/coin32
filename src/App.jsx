import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import GameListPage from './pages/GameListPage/GameListPage';
import GameProfilePage from './pages/GameProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route index element={<GameListPage />} />
        <Route path={'game/:slug'} element={<GameProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
