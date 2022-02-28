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
`;

const ModalSlider = (props) => {
	const { active, setModalIsActive, screenshots, imageNumber } = props;
	const images = screenshots.results;
	const [slide, setSlide] = useState(imageNumber);

	// Получаем номер слайда для отображения при открытии слайдера
	useEffect(() => {
		setSlide(imageNumber);
	}, [imageNumber])

	// Переключаем на предыдущий слайд
	const prevSlide = () => {
		if (slide === 0) {
			setSlide(images.length - 1);
		} else {
			setSlide(slide - 1);
		}
	}

	// Переключаем на следующий слайд
	const nextSlide = () => {
		if (slide === images.length - 1) {
			setSlide(0);
		} else {
			setSlide(slide + 1);
		}
	}

	return (
		<Wrapper active={active} >
			<ButtonClose onClick={() => setModalIsActive(false)}>X</ButtonClose>

			<Control>
				<Button onClick={prevSlide}>&#060;</Button>
				<Button onClick={nextSlide}>&#062;</Button>
			</Control>
			<Content>
				<Image src={images[slide].image} onClick={nextSlide} />
			</Content>
		</Wrapper>
	);
}

export default ModalSlider;
