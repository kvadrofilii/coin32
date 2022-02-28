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

	ul {
		width: 250px;
		max-height: 200px;
		padding: 0;
		margin: 0;
		top: 0;
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
	}
`;
