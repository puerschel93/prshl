import Helmet from "react-helmet";
import x32 from "graphics/favicon-32x32.png";
import x16 from "graphics/favicon-16x16.png";
import xAp from "graphics/apple-touch-icon.png";
import { useBreakpointValue } from "@chakra-ui/media-query";

const Head = () => {
  const title = useBreakpointValue({
    base: "PRSHL",
    xl: "PORTFOLIO - PRSHL",
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Portfolio of Florian Pürschel" />
      <link rel="apple-touch-icon" sizes="180x180" href={xAp} />
      <link rel="icon" type="image/png" sizes="32x32" href={x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={x16} />
    </Helmet>
  );
};

export default Head;