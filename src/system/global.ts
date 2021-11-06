import { createGlobalStyle } from "styled-components";
import IntegralCF from "./fonts/IntegralCF-Bold.woff";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'IntegralCF';
		src: url(${IntegralCF}) format('woff');
		font-weight: bold;
		font-style: normal;
	}

	* {
		font-family: 'IntegralCF', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*::selection {
		background: black;
	}
`;

export default GlobalStyle;
