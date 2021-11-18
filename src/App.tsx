import { useEffect, useState } from "react";
import { Center, Text, Box, Link } from "system/style";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Content from "components/Content";
import { subline as sublineArray } from "data/subline";

const App = () => {
  const [subline, setSubline] = useState(
    sublineArray[Math.floor(Math.random() * sublineArray.length)]
  );

  const content = useBreakpointValue({
    base: "PRSHL",
    md: "FLRN PRSHL",
    lg: "FLORIAN PRSHL",
    xl: "FLORIAN PŪRSCHEL",
  });

  const contentWidth = useBreakpointValue({
    base: "90vw",
    md: "80vw",
    lg: "50vw",
    xl: "35vw",
  });

  useEffect(() => {
    const sublineInterval = setInterval(() => {
      setSubline(sublineArray[Math.floor(Math.random() * sublineArray.length)]);
    }, 5000);
    return () => clearInterval(sublineInterval);
  }, []);

  return (
    <Center
      width="100vw"
      height="100vh"
      position="relative"
      zIndex={2}
      flexDirection="column"
      overflowY="scroll"
    >
      <Center
        position="relative"
        flexDirection="column"
        width={contentWidth}
        style={{ transition: "1s" }}
      >
        <Text color="salmon.300" fontSize="3xl" fontWeight="bold">
          {content}
        </Text>

        <Text color="white" fontSize="lg" fontWeight="bold" marginTop="1rem">
          {subline}
        </Text>
        <Content />
      </Center>

      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom="2rem"
      >
        <Link href="https://github.com/puerschel93" mr="1rem">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/puerschel" mr="1rem">
          LinkedIn
        </Link>
        <Link href="https://www.instagram.com/mr.prshl/" mr="1rem">
          Instagram
        </Link>
        <Link href="mailto:hello@prshl.de">Mail</Link>
      </Box>
    </Center>
  );
};

export default App;
