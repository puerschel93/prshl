import { Flex, Text } from "system/style";
import Work from "components/Work";

const Content = () => {
  return (
    <Flex
      position="absolute"
      width="100%"
      top="calc(100% + 10rem)"
      left="0"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Text color="white" mb="2.5rem">
        Recent Work
      </Text>
      <Flex
        width="100%"
        flexDirection="column"
        spacing={4}
        alignItems="flex-start"
        pb="12.5rem"
      >
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </Flex>
    </Flex>
  );
};

export default Content;
