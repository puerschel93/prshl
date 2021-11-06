import { createGlobalStyle } from "styled-components";
import IntegralCF from "./fonts/IntegralCF-Regular.woff";
import IntegralCF2 from "./fonts/IntegralCF-Regular.woff2";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'IntegralCF';
		src: url(${IntegralCF}) format('woff');
			url(${IntegralCF2}) format('woff2');
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
		background: white;
	}
`;

export default GlobalStyle;
