import styled from 'styled-components';
import { baseTheme } from '../theme';

export const A = styled.a`
	text-decoration: none;
	color: ${baseTheme.colors.font};

	:hover {
		text-decoration: underline;
	}
`;
