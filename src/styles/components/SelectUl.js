import styled from 'styled-components';
import { baseTheme } from '../theme';

export const SelectUl = styled.ul`
	width: 250px;
	max-height: 200px;
	padding: 0;
	margin: 0;
	position: absolute;
	overflow: scroll;
	background-color: ${baseTheme.colors.dark};
	list-style: none;
	border-radius: 10px;

	li {
		height: 40px;
		display: flex;
		align-items: center;
		padding: 5px 10px;
		cursor: pointer;

		:hover {
			background-color: #aaa;
		}

		:active {
			background-color: #bbb;
		}
	}

	a {
		display: block;
		color: ${baseTheme.colors.font};
	}
`;
