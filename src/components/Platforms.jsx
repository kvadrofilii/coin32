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
	// Список платформ и value для 
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
		// Закрывает список платформ при нажатии вне инпута и списка
		const handleClickOutside = (event) => {
			(wrapperRef.current && !wrapperRef.current.contains(event.target)) && setOpen(false);
		}
		// Вешаем слушатель нажатия кнопки мышки
		document.addEventListener('mousedown', handleClickOutside);
		// Отключаем слушатель при размонтировании компонента
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, [wrapperRef]);

	// Открывает список платформ
	const handleOpen = () => setOpen(true);

	// Считывает нажатия на пункты в списке платформ
	const handleClick = (name, value) => {
		// Заменяет название платформы на заголовке списка выбора платформы
		setSelect(name);
		// Закрывает список платформ
		setOpen(false);

		// Проверяет какая платформа выбрана и формирует новый запрос на сервер
		switch (value) {
			case 'platforms': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12'));
				break;
			}

			case 'pc': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=4'));
				break;
			}

			case 'apple': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=5'));
				break;
			}

			case 'ps': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=187,18,16,15,27'));
				break;
			}

			case 'xbox': {
				dispatch(stateUrl('https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12&platforms=1,186,14,80'));
				break;
			}

			default:
				break;
		}
	}

	// Выводит список платформ
	const platformOutput = (data) => {
		return data.map((item) => {
			return <li key={item.value} onClick={() => handleClick(item.name)}>{item.name}</li>;
		});
	}


	return (
		<Select ref={wrapperRef}>
			<div onClick={handleOpen}>
				{select}
			</div>

			{isOpen && (
				<PlatformsList>
					{platformOutput(platforms)}
				</PlatformsList>
			)}
		</Select>
	);
}

export default Platforms;
