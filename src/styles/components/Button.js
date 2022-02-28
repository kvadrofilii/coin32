import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Button = styled.button`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${baseTheme.colors.dark};
	color: ${baseTheme.colors.font};
	font-size: 2rem;
	font-weight: 700;
	line-height: 100%;
	border: none;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		opacity: 80%;
	}

	:active {
		opacity: 50%;
	}
`;
