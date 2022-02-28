import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { Input } from '../styles/components/Input';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	position: relative;
`;

const Ul = styled.ul`
	width: 250px;
	max-height: 200px;
	margin: 5px 0 0 0;
	padding: 0;
	position: absolute;
	overflow: scroll;
	background-color: ${baseTheme.colors.dark};
	list-style: none;
	border-radius: 10px;

	li {
		padding: 5px 10px;
		cursor: pointer;

		:hover {
			background-color: #aaa;
		}

		:active {
			background-color: #bbb;
		}
	}

	a {
		display: block;
		color: ${baseTheme.colors.font};
	}
`;


const Search = () => {
	const [error, setError] = useState(null);
	const [games, setGames] = useState({});
	const [value, setValue] = useState('');
	const [isOpen, setOpen] = useState(false);
	const [list, setList] = useState(false);
	const wrapperRef = useRef(null);

	// Функция открытия списка игр при нажатии на input
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
					setError(error);
				}
			)

		error && console.log(error);
	}, [value, error]);

	useEffect(() => {
		// Функция закрывает список найденных игр при нажатии вне инпута и списка
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpen(false);
			}
		}

		// Вешаем слушатель нажатия кнопки мышки
		document.addEventListener('mousedown', handleClickOutside);
		// Отключаем слушатель при размонтировании компонента
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	// Функция считывания нажатия на пункт в списке
	const handleClick = () => {
		setOpen(false);
	}

	// Функция поиска по списку
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

			{
				isOpen && (
					<Ul>
						{list}
					</Ul>
				)
			}

		</Wrapper>
	);
}

export default Search;