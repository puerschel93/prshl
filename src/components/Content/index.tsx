import Work from "components/Work";
import { Flex, Text } from "system/style";

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
        {Array(30)
          .fill(1)
          .map((id, index) => (
            <Work index={index} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Content;
