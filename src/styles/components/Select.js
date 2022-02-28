import styled from 'styled-components';
import { baseTheme } from '../theme';

export const Select = styled.div`
	position: relative;
	width: 250px;
	height: 40px;
	background-color: ${baseTheme.colors.dark};
	color: ${baseTheme.colors.font};
	font-size: 1.6rem;
	font-style: normal;
	font-weight: normal;
	line-height: 100%;
	border-radius: 10px;
	cursor: pointer;

	div {
		width: 100%;
		height: 100%;
		padding: 10px;
		display: flex;
		align-items: center;

		:hover {
			opacity: 70%;
		}

		:active {
			opacity: 50%;
		}
	}
`;
