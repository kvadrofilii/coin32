import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { baseTheme } from '../styles/theme';

const Wrapper = styled.div`
	width: 100%;
	background-color: ${baseTheme.colors.dark};
	border-radius: 20px;
`;

const Image = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 20px 20px 0 0;
	object-position: center top;
	object-fit: cover;

	@media (min-width: ${baseTheme.media.tablet}) {
		height: 200px;
	}
`;

const ContentWrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h2`
	margin: 0;
	padding: 0;
	line-height: 110%;
	color: ${baseTheme.colors.font};
`;

const Ul = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	li {
		padding-top: 5px;
		color: ${baseTheme.colors.font};
	}
`;

const dateReleased = (date) => {
	const americanDate = date.split('-');
	const result = `${americanDate[2]}.${americanDate[1]}.${americanDate[0]}`;
	return result;
}

const GameCard = (props) => {
	const { name, rating, released, background_image, slug } = props;

	return (
		<Link to={`game/${slug}`}>
			<Wrapper>
				<Image src={background_image} />
				<ContentWrapper>
					<Title>{name}</Title>
					<Ul>
						<li>
							Release date: {dateReleased(released)}
						</li>
						<li>
							Rating: {rating}
						</li>
					</Ul>
				</ContentWrapper>
			</Wrapper>
		</Link>
	);
}

export default GameCard;
