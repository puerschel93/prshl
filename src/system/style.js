import { createGlobalStyle } from "styled-components";
import IntegralCF2 from "./fonts/IntegralCF-Bold.woff2";
import IntegralCF from "./fonts/IntegralCF-Bold.woff";

import IntegralCFHeavy2 from "./fonts/IntegralCF-Heavy.woff2";
import IntegralCFHeavy from "./fonts/IntegralCF-Heavy.woff";

const Global = createGlobalStyle`
	@font-face {
		font-family: 'Integral';
			src: url(${IntegralCF2}) format('woff2'),
				url(${IntegralCF}) format('woff');
	}

	@font-face {
		font-family: 'IntegralHeavy';
			src: url(${IntegralCFHeavy2}) format('woff2'),
				url(${IntegralCFHeavy}) format('woff');
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Integral', sans-serif;
	}

	*::selection {
		background-color: black;
	}
`;

export default Global;
