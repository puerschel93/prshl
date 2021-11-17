import { createGlobalStyle } from "styled-components";

import IntegralCFRegular from "./fonts/IntegralCF-Regular.woff";
import IntegralCFRegular2 from "./fonts/IntegralCF-Regular.woff2";
import IntegralCFRegularOblique from "./fonts/IntegralCF-RegularOblique.woff";
import IntegralCFRegularOblique2 from "./fonts/IntegralCF-RegularOblique.woff2";
import IntegralCFBold from "./fonts/IntegralCF-Bold.woff";
import IntegralCFBold2 from "./fonts/IntegralCF-Bold.woff2";
import IntegralCFBoldOblique from "./fonts/IntegralCF-BoldOblique.woff";
import IntegralCFBoldOblique2 from "./fonts/IntegralCF-BoldOblique.woff2";
import IntegralCFDemiBold from "./fonts/IntegralCF-DemiBold.woff";
import IntegralCFDemiBold2 from "./fonts/IntegralCF-DemiBold.woff2";
import IntegralCFDemiBoldOblique from "./fonts/IntegralCF-DemiBoldOblique.woff";
import IntegralCFDemiBoldOblique2 from "./fonts/IntegralCF-DemiBoldOblique.woff2";
import IntegralCFExtraBold from "./fonts/IntegralCF-ExtraBold.woff";
import IntegralCFExtraBold2 from "./fonts/IntegralCF-ExtraBold.woff2";
import IntegralCFExtraBoldOblique from "./fonts/IntegralCF-ExtraBoldOblique.woff";
import IntegralCFExtraBoldOblique2 from "./fonts/IntegralCF-ExtraBoldOblique.woff2";
import IntegralCFHeavy from "./fonts/IntegralCF-Heavy.woff";
import IntegralCFHeavy2 from "./fonts/IntegralCF-Heavy.woff2";
import IntegralCFHeavyOblique from "./fonts/IntegralCF-HeavyOblique.woff";
import IntegralCFHeavyOblique2 from "./fonts/IntegralCF-HeavyOblique.woff2";
import IntegralCFMedium from "./fonts/IntegralCF-Medium.woff";
import IntegralCFMedium2 from "./fonts/IntegralCF-Medium.woff2";
import IntegralCFMediumOblique from "./fonts/IntegralCF-MediumOblique.woff";
import IntegralCFMediumOblique2 from "./fonts/IntegralCF-MediumOblique.woff2";
import Inter from "./fonts/Inter-SemiBold.woff";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFRegular}) format('woff');
			url(${IntegralCFRegular2}) format('woff2');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFRegularOblique}) format('woff');
			url(${IntegralCFRegularOblique2}) format('woff2');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFMedium}) format('woff');
			url(${IntegralCFMedium2}) format('woff2');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFMediumOblique}) format('woff');
			url(${IntegralCFMediumOblique2}) format('woff2');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFDemiBold}) format('woff');
			url(${IntegralCFDemiBold2}) format('woff2');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFDemiBoldOblique}) format('woff');
			url(${IntegralCFDemiBoldOblique2}) format('woff2');
		font-weight: 600;
		font-style: italic;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFBold}) format('woff');
			url(${IntegralCFBold2}) format('woff2');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFBoldOblique}) format('woff');
			url(${IntegralCFBoldOblique2}) format('woff2');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFExtraBold}) format('woff');
			url(${IntegralCFExtraBold2}) format('woff2');
		font-weight: 800;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFExtraBoldOblique}) format('woff');
			url(${IntegralCFExtraBoldOblique2}) format('woff2');
		font-weight: 800;
		font-style: italic;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFHeavy}) format('woff');
			url(${IntegralCFHeavy2}) format('woff2');
		font-weight: 900;
		font-style: normal;
	}

	@font-face {
		font-family: 'Integral';
		src: url(${IntegralCFHeavyOblique}) format('woff');
			url(${IntegralCFHeavyOblique2}) format('woff2');
		font-weight: 900;
		font-style: italic;
	}

	@font-face {
		font-family: 'Inter';
		src: url(${Inter}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	* {
		font-family: 'Integral', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-ms-overflow-style: none;
		scrollbar-width: none
	}

	*::selection {
		background-color: white;
		border-radius: 3px;
	}
`;

export default GlobalStyle;
