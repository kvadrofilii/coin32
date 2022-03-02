import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { Button } from '../styles/components/Button';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.9);
	transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
	z-index: 100;
`;

const ButtonClose = styled(Button)`
	position: absolute;
	top: 20px;
	right: 20px;
`;

const Content = styled.div`
	width: 95%;
	height: 80%;
	display: flex;
	border-radius: 10px;
	background-color: ${baseTheme.colors.dark};

	@media (min-width: ${baseTheme.media.tablet}) {
		width: 80%;
	}
`;

const Control = styled.div`
	width: 120px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-position: center top;
	object-fit: cover;
	border-radius: 10px;
	flex-shrink: 0;
	cursor: pointer;
`;

// Переключаем на предыдущий слайд
const prevSlide = (slide, images, setSlide) => {
	(slide === 0) ? setSlide(images.length - 1) : setSlide(slide - 1);
}

// Переключаем на следующий слайд
const nextSlide = (slide, images, setSlide) => {
	(slide === images.length - 1) ? setSlide(0) : setSlide(slide + 1);
}

// Закрываем слайдер
const closeSlider = (setModalIsActive) => {
	setModalIsActive(false);
	document.body.style.overflow = '';
}

const ModalSlider = (props) => {
	const { active, setModalIsActive, screenshots, imageNumber } = props;
	// Массив с адресами скриншотов
	const images = screenshots.results;
	// Текущий слайд для отображения
	const [slide, setSlide] = useState(imageNumber);

	// Получаем номер слайда для отображения при открытии слайдера
	useEffect(() => {
		setSlide(imageNumber);
	}, [imageNumber]);

	useEffect(() => {
		const handleClickEscape = (event) => {
			// Вызывает функцию закрытия слайдера, если нажата кнопка Escape
			(event.code === 'Escape') && closeSlider(setModalIsActive);
			// Вызывает функцию переключения слайдера, если нажата стрелка влево
			(event.code === 'ArrowLeft') && prevSlide(slide, images, setSlide);
			// Вызывает функцию переключения слайдера, если нажата стрелка вправо
			(event.code === 'ArrowRight') && nextSlide(slide, images, setSlide);
		};
		// Вешаем слушатель нажатия кнопок на клавиатуре
		document.addEventListener('keydown', handleClickEscape);
		// Отключаем слушатель при размонтировании компонента
		return () =>
			document.removeEventListener('keydown', handleClickEscape);
	}, [images, setModalIsActive, slide]);

	return (
		<Wrapper active={active} >
			<ButtonClose onClick={() => closeSlider(setModalIsActive)}>
				X
			</ButtonClose>

			<Control>
				<Button onClick={() => prevSlide(slide, images, setSlide)}>
					&#060;
				</Button>
				<Button onClick={() => nextSlide(slide, images, setSlide)}>
					&#062;
				</Button>
			</Control>

			<Content>
				<Image src={images[slide].image} onClick={() => nextSlide(slide, images, setSlide)} />
			</Content>
		</Wrapper>
	);
}

export default ModalSlider;
