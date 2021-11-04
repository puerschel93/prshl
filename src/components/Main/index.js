import Helmet from "react-helmet";
import Text from "system/text";
import Center from "system/center";
import LatestWork from "components/LatestWork";
import Box from "system/box";

const Main = () => {
  return (
    <Box width="100vw" height="100vh" bg="black" position="relative">
      <Center position="absolute" top="50vh" width="100vw" paddingTop="2rem">
        <Text color="white" fontSize="4rem" position="absolute" top="-2rem">
          PRSHL
        </Text>
        <LatestWork />
      </Center>
    </Box>
  );
};

export default Main;
