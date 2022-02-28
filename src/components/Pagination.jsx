import styled from 'styled-components';
import { Button } from '../styles/components/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateUrl } from '../app/reducers/games';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Control = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-between;
`;

const ButtonPrev = styled(Button)`
	opacity: ${props => props.isPrev ? '100%' : '50%'};
	cursor: ${props => props.isPrev ? 'pointer' : 'auto'};
	pointer-events: ${props => props.isPrev ? 'auto' : 'none'};
	user-select: ${props => props.isPrev ? 'auto' : 'none'};

	:hover {
		opacity: ${props => props.isPrev ? '80%' : '50%'};
	}
`;

const ButtonNext = styled(Button)`
	opacity: ${props => props.isNext ? '100%' : '50%'};
	cursor: ${props => props.isNext ? 'pointer' : 'auto'};
	pointer-events: ${props => props.isNext ? 'auto' : 'none'};
	user-select: ${props => props.isNext ? 'auto' : 'none'};

	:hover {
		opacity: ${props => props.isNext ? '80%' : '50%'};
	}
`;

export default function Pagination() {
	const dispatch = useDispatch();
	const { prevUrl, nextUrl } = useSelector((state) => state.games);
	const [isPrev, setIsPrev] = useState(false);
	const [isNext, setIsNext] = useState(true);

	useEffect(() => {
		(prevUrl === null) && setIsPrev(false);
		(nextUrl === null) && setIsNext(false);
	}, [prevUrl, nextUrl])

	// Переключаем на предыдущую страницу
	const prevSlide = () => {
		if (prevUrl !== null) {
			dispatch(stateUrl(prevUrl));
			setIsNext(true);
		}
	}

	// Переключаем на следующую страницу
	const nextSlide = () => {
		if (nextUrl !== null) {
			dispatch(stateUrl(nextUrl));
			setIsPrev(true);
		}
	}

	return (
		<Wrapper>
			<Control>
				<ButtonPrev onClick={prevSlide} isPrev={isPrev}>
					&#060;
				</ButtonPrev>
				<ButtonNext onClick={nextSlide} isNext={isNext}>
					&#062;
				</ButtonNext>
			</Control>
		</Wrapper>
	);
}
