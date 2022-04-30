import { Input } from '../../styles/components/Input';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, SearchList } from './Search.style';


const Search = () => {
  const [games, setGames] = useState({});
  const [value, setValue] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [list, setList] = useState(false);
  const wrapperRef = useRef(null);

  // Открывает список найденных игр при нажатии на input
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const url = `https://rawg.io/api/games?search=${value}&key=3ab57b62be844a19885e0fffc9bdd397`;
    fetch(url)
      .then(response => response.json())
      .then(
        (result) => {
          setGames(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [value]);

  useEffect(() => {
    // Закрывает список найденных игр при нажатии вне инпута и списка
    const handleClickOutside = (event) => {
      (wrapperRef.current && !wrapperRef.current.contains(event.target)) && setOpen(false);
    };
    // Вешаем слушатель нажатия кнопки мышки
    document.addEventListener('mousedown', handleClickOutside);
    // Отключаем слушатель при размонтировании компонента
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  // Считываем нажатия на пункты в списке найденных игр и закрываем список
  const handleClick = () => setOpen(false);

  // Формирует список из найденных игр
  const search = (event) => {
    setValue(event.target.value);
    const gamesList = games.results;
    if (event.target.value !== '') {
      setOpen(true);
      const result = gamesList.map((item) => {
        return <li key={item.slug}><Link to={`game/${item.slug}`} onClick={handleClick}>{item.name}</Link></li>;
      });
      setList(result);
    } else {
      setOpen(false);
      setList([]);
    }
  }


  return (
    <Wrapper ref={wrapperRef}>
      <Input
        onChange={search}
        onClick={handleOpen}
        value={value}
        type={'text'}
        placeholder={'Search games'}
      />

      {isOpen && (
        <SearchList>
          {list}
        </SearchList>
      )}

    </Wrapper>
  );
}

export default Search;
