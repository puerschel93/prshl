import { Center, Text, Box, Link } from "system/style";
import { useBreakpointValue } from "@chakra-ui/media-query";

const App = () => {
  const content = useBreakpointValue({
    base: "PRSHL",
    md: "FLRN PRSHL",
    lg: "FLORIAN PRSHL",
    xl: "FLORIAN PŪRSCHEL",
  });

  return (
    <Center
      width="100vw"
      height="100vh"
      position="relative"
      zIndex={2}
      flexDirection="column"
    >
      <Text color="salmon.300" fontSize="3xl" fontWeight="bold">
        {content}
      </Text>

      <Text color="white" fontSize="lg" fontWeight="bold" marginTop="1rem">
        私を雇う
      </Text>

      <Box
        width="50vw"
        flexDirection="row"
        justifyContent="center"
        marginTop="1rem"
      >
        <Link href="https://github.com/puerschel93" mr="1rem">
          Github
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
