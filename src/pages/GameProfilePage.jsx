import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { A } from '../styles/components/A';
import ModalSlider from '../components/ModalSlider';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: ${baseTheme.media.tablet}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const Image = styled.img`
	width: 100%;
	object-position: center top;
	object-fit: cover;
	border-radius: 10px;
`;

const ImageScreenshot = styled(Image)`
	height: 150px;
`;

const ContentWrapper = styled.div`
	flex-basis: 53%;
`;

const ImageWrapper = styled.div`
	flex-basis: 45%;
`;

const Title = styled.h1`
	margin: 0;
	line-height: 150%;
`;

const Subtitle = styled.h2`
	font-size: 2rem;
	line-height: 150%;
	padding-top: 10px;
`;

const Description = styled.p`
	text-align: justify;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	list-style: none;

	@media (min-width: ${baseTheme.media.tablet}) {
		flex-direction: row;
		justify-content: space-between;
	}

	li {
		padding-top: 5px;
	}
`;

const Screenshots = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	row-gap: 10px;
	column-gap: 10px;
`;

const dateReleased = (date) => {
	const americanDate = date.split('-');
	const result = `${americanDate[2]}.${americanDate[1]}.${americanDate[0]}`;
	return result;
};

const onClickImage = (number, setModalIsActive, setImageNumber) => {
	setImageNumber(number);
	setModalIsActive(true);
	const body = document.body;
	body.style.overflowY = 'hidden';
};


const GameProfilePage = () => {
	const { slug } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [game, setGame] = useState({});
	const [screenshots, setScreenshots] = useState({});
	const [modalIsActive, setModalIsActive] = useState(false);
	const [imageNumber, setImageNumber] = useState(0);

	useEffect(() => {
		const urls = [
			`https://rawg.io/api/games/${slug}?key=3ab57b62be844a19885e0fffc9bdd397`,
			`https://rawg.io/api/games/${slug}/screenshots?key=3ab57b62be844a19885e0fffc9bdd397`
		];

		Promise.all(urls.map(url =>
			fetch(url)
				.then(response => response.json())
				.catch(error => console.log('There was a problem!', error))
		))
			.then(
				(result) => {
					setGame(result[0]);
					setScreenshots(result[1]);
					setIsLoaded(false);
				},
				(error) => {
					setError(error);
					setIsLoaded(false);
				}
			)
	}, [slug]);

	// Функция вывода скриншотов
	const screenshotsOutput = (data) => {
		const screenshots = data.results;
		// Проверяем есть ли скриншоты. Если нет, то возвращаем пустой div
		if (screenshots.length === 0) {
			return <div></div>
		} else {
			// Формируем вёрстку на основе массива с адресами скриншотов
			const result = screenshots.map((item, index) =>
				<ImageScreenshot
					key={item.id}
					src={item.image}
					onClick={() => onClickImage(index, setModalIsActive, setImageNumber)}
				/>
			);
			// Оставляем только 4 первых скриншота для вывода
			return result.slice(0, 4);
		}
	};


	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Wrapper>
				<ContentWrapper>
					<Title>{game.name}</Title>
					<hr />
					<Ul>
						<li>
							Release date: {dateReleased(game.released)}
						</li>
						<li>
							Rating: {game.rating}
						</li>
						<li>
							<A
								href={game.website}
								target='_blank'
								rel='nofollow noopener noreferrer'
							>
								Website
							</A>
						</li>
					</Ul>
					<Subtitle>About</Subtitle>
					<Description>{game.description_raw}</Description>
				</ContentWrapper>

				<ImageWrapper>
					<Image src={game.background_image} />

					<Screenshots>
						{screenshotsOutput(screenshots)}
					</Screenshots>
				</ImageWrapper>

				<ModalSlider
					active={modalIsActive}
					setModalIsActive={setModalIsActive}
					screenshots={screenshots}
					imageNumber={imageNumber}
				/>
			</Wrapper>
		);
	}
}

export default GameProfilePage;
