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
    <Center
      width="100vw"
      height="100vh"
      position="relative"
      zIndex={2}
      flexDirection="column"
    >
      <Text color="salmon.500" fontSize="3xl" fontWeight="bold">
        {content}
      </Text>
      <Text color="white" fontSize="lg" fontWeight="bold" marginTop="1rem">
        私を雇う
      </Text>
    </Center>
  );
};

export default App;
