import React, { useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../app/reducers/games';
import { Wrapper } from './GameListPage.style';

// Формирует карточки с играми для вывода на основе полученных данных с сервера
const gameList = (games) => {
  return games.map((item) =>
    <GameCard
      key={item.id}
      name={item.name}
      rating={item.rating}
      released={item.released}
      background_image={item.background_image}
      slug={item.slug}
    />
  );
}


const GameListPage = () => {
  const dispatch = useDispatch();
  // Переменные для: данных с играми, состояния загрузки и адреса для загрузки данных с сервера
  const { games, isLoaded, url } = useSelector((state) => state.games);

  // Получаем данные по играм с сервера
  useEffect(() => {
    dispatch(getGames(url));
  }, [dispatch, url]);

  return (isLoaded) ?
    <Spinner /> :
    <Wrapper>{gameList(games)}</Wrapper>;
}

export default GameListPage;
