import { Center, Text } from "system/style";
import { useBreakpointValue } from "@chakra-ui/media-query";

const App = () => {
  const content = useBreakpointValue({
    base: "PRSHL",
    md: "FLRN PRSHL",
    lg: "FLORIAN PRSHL",
    xl: "FLORIAN PŪRSCHEL",
  });

  return (
    <Center width="100vw" height="100vh" position="relative" zIndex={2}>
      <Text
        color="salmon.500"
        fontSize="3xl"
        fontWeight="bold"
        textShadow="medium"
      >
        {content}
      </Text>
    </Center>
  );
};

export default App;
