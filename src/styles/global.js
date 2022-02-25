import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
		min-height: 100%;
	}

	body {
		height: 100%;
		margin: 0;
		padding: 0 15px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 1.6rem;
		font-style: normal;
		font-weight: normal;
		line-height: 2rem;
		color: black;
		background-color: #f3f3f3;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	#root {
  height: 100%;
	}
`
