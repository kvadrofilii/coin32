import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
		height: 100vh;
	}

	body {
		min-width: ${baseTheme.media.mobile};
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: normal;
		line-height: 2rem;
		color: ${baseTheme.colors.font};
		background-color: ${baseTheme.colors.bg};
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	a {
			text-decoration: none;
		}
`
