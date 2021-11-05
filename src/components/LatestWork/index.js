import Box from "system/box";
import Text from "system/text";

const LatestWork = () => {
  return (
    <Box
      flexDirection="column"
      paddingTop="20vh"
      width={["98vw", "70vw", "60vw", "50vw", "40vw"]}
      gridGap={15}
    >
      <Text>RECENT WORK</Text>

      {Array(15)
        .fill(1)
        .map((el, index) => (
          <Text>{index + 1}</Text>
        ))}
    </Box>
  );
};

export default LatestWork;
