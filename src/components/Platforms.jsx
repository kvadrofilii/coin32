import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { stateUrl } from '../app/reducers/games';
import styled from 'styled-components';
import { Select } from '../styles/components/Select';
import { SelectUl } from '../styles/components/SelectUl';

const PlatformsList = styled(SelectUl)`
	top: 0;
`;

const Platforms = () => {
	const platforms = [
		{
			name: 'Platforms',
			value: 'platforms'
		},
		{
			name: 'PC',
			value: 'pc'
		},
		{
			name: 'Apple Macintosh',
			value: 'apple'
		},
		{
			name: 'Play Station',
			value: 'ps'
		},
		{
			name: 'XBOX',
			value: 'xbox'
		}
	];
	const [select, setSelect] = useState('Platforms');
	const [isOpen, setOpen] = useState(false);
	const dispatch = useDispatch();
	const wrapperRef = useRef(null);

	useEffect(() => {
		// Функция закрывает список платформ при нажатии вне инпута и списка
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

	// Функция открытия списка платформ
	const handleOpen = () => setOpen(true);

	// Функция считывания нажатия на пункт в списке
	const handleClick = (name) => {
		setSelect(name)
		setOpen(false);

		switch (name) {
			case 'Platforms': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12'));
				break;
			}

			case 'PC': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=4'));
				break;
			}

			case 'Apple Macintosh': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=5'));
				break;
			}

			case 'Play Station': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=187,18,16,15,27'));
				break;
			}

			case 'XBOX': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=1,186,14,80'));
				break;
			}

			default:
				break;
		}
	}

	// Выводим список платформ
	const platformOutput = (data) => {
		const result = data.map((item) => {
			return <li key={item.value} onClick={() => handleClick(item.name)}>{item.name}</li>;
		});

		return result;
	}


	return (
		<Select ref={wrapperRef}>
			<div onClick={handleOpen}>{select}</div>
			{
				isOpen && (
					<PlatformsList>
						{platformOutput(platforms)}
					</PlatformsList>
				)
			}
		</Select>
	);
}

export default Platforms;
