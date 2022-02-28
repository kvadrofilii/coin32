import React, { useEffect } from 'react';
import GameCard from '../components/GameCard';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../app/reducers/games';

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 20px;
	align-items: flex-start;

	@media (min-width: ${baseTheme.media.tablet}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		column-gap: 20px;
	}

	@media (min-width: ${baseTheme.media.desktop}) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const gameList = (games) => {
	const result = games.map((item) =>
		<GameCard
			key={item.id}
			name={item.name}
			rating={item.rating}
			released={item.released}
			background_image={item.background_image}
			slug={item.slug}
		/>
	);
	return result;
}


const GameListPage = () => {
	const dispatch = useDispatch();
	const { games, isLoaded, url } = useSelector((state) => state.games);

	useEffect(() => {
		dispatch(getGames(url));
	}, [dispatch, url]);


	if (isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<Wrapper>
			{
				gameList(games)
			}
		</Wrapper>
	);
}

export default GameListPage;
