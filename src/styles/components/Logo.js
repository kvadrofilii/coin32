import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Logo = styled.span`
	color: ${baseTheme.colors.font};
	font-size: 2rem;
	font-weight: 700;

	@media (min-width: ${baseTheme.media.tablet}) {
		margin-right: 20px;
	}
`;
