import styled from 'styled-components';
import { baseTheme } from '../styles/theme';
import { Container } from '../styles/layouts/Container';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import Platforms from '../components/Platforms';
import { useLocation } from 'react-router-dom';
import Sort from '../components/Sort';

const Wrapper = styled.header`
	width: 100%;
	border-bottom: 3px solid ${baseTheme.colors.dark};
	flex-shrink: 0;

	@media (min-width: ${baseTheme.media.tablet}) {
		height: 100px;
	}
`;

const Logo = styled.span`
	color: ${baseTheme.colors.font};
	font-size: 2rem;
	font-weight: 700;

	@media (min-width: ${baseTheme.media.tablet}) {
		margin-right: 20px;
	}
`;

const Content = styled.header`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 20px;
	column-gap: 20px;
	justify-items: center;

	@media (min-width: ${baseTheme.media.tablet}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Header = () => {
	// Получаю информацию об адресе страницы
	const location = useLocation();

	return (
		<Wrapper>
			<Container>
				<Content>
					<Link to={`/`}>
						<Logo>RAWG</Logo>
					</Link>
					{location.pathname === '/' && <><Sort /><Platforms /></>}
					<Search />
				</Content>
			</Container>
		</Wrapper>
	);
}

export default Header;