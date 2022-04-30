import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, stateGames } from '../../app/reducers/games';
import { Select } from '../../styles/components/Select';
import { SortList } from './Sort.style';

const Sort = () => {
  const platforms = [
    {
      name: 'Relevance',
      value: 'relevance'
    },
    {
      name: 'Rating ↑',
      value: 'rating-up'
    },
    {
      name: 'Rating ↓',
      value: 'rating-down'
    },
    {
      name: 'Release date ↑',
      value: 'release-date-up'
    },
    {
      name: 'Release date ↓',
      value: 'release-date-down'
    }
  ];
  const [select, setSelect] = useState('Relevance');
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const { games, url } = useSelector((state) => state.games);

  useEffect(() => {
    setSelect('Relevance');
  }, [url]);

  useEffect(() => {
    // Функция закрывает список для сортировки при нажатии вне инпута и списка
    const handleClickOutside = (event) => {
      (wrapperRef.current && !wrapperRef.current.contains(event.target)) && setOpen(false);
    };
    // Вешаем слушатель нажатия кнопки мышки
    document.addEventListener('mousedown', handleClickOutside);
    // Отключаем слушатель при размонтировании компонента
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  // Функция открытия списка платформ
  const handleOpen = () => setOpen(true);

  // Функция считывания нажатия на пункт в списке
  const handleClick = (name, value) => {
    setSelect(name)
    setOpen(false);

    switch (value) {
      case 'relevance': {
        dispatch(getGames(url));
        break;
      }

      case 'rating-up': {
        let sortGames = [...games];
        sortGames = sortGames.sort((x, y) => x['rating'] - y['rating']);
        dispatch(stateGames(sortGames));
        break;
      }

      case 'rating-down': {
        let sortGames = [...games];
        sortGames = sortGames.sort((x, y) => y['rating'] - x['rating']);
        dispatch(stateGames(sortGames));
        break;
      }

      case 'release-date-up': {
        let sortGames = [...games];
        sortGames = sortGames.sort((a, b) => a.released.localeCompare(b.released));
        dispatch(stateGames(sortGames));
        break;
      }

      case 'release-date-down': {
        let sortGames = [...games];
        sortGames = sortGames.sort((a, b) => b.released.localeCompare(a.released));
        dispatch(stateGames(sortGames));
        break;
      }

      default:
        break;
    }
  }

  // Выводим список сортировки
  const sortOutput = (data) => {
    return data.map((item) => {
      return <li key={item.value} onClick={() => handleClick(item.name, item.value)}>{item.name}</li>;
    });
  }


  return (
    <Select ref={wrapperRef}>
      <div onClick={handleOpen}>
        {select}
      </div>

      {isOpen && (
        <SortList>
          {sortOutput(platforms)}
        </SortList>
      )}
    </Select>
  );
}

export default Sort;
