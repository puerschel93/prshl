import { createGlobalStyle } from "styled-components";
import IntegralCF from "./fonts/IntegralCF-Heavy.woff";
import IntegralCF2 from "./fonts/IntegralCF-Heavy.woff2";

const Global = createGlobalStyle`
	@font-face {
		font-family: 'Integral';
			src: url(${IntegralCF2}) format('woff2'),
				url(${IntegralCF}) format('woff');
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Integral', sans-serif;
	}
`;

export default Global;
