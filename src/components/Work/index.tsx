import { Grid, Text } from "system/style";

const Work = (props: any) => {
  return (
    <Grid
      width="100%"
      padding="0.2rem"
      borderRadius="0.25rem"
      backgroundColor="rgba(5,5,5,0.5)"
      borderColor="gray.900"
      borderWidth="1px"
      gridTemplateColumns={props.index % 2 === 0 ? "1fr 3fr" : "3fr 1fr"}
      spacingX={4}
    >
      <Text
        style={{
          gridRow: "1",
          gridColumn: props.index % 2 === 0 ? "1" : "2",
          backgroundColor: "salmon",
        }}
      >
        Image
      </Text>
      <Text
        style={{
          gridRow: "1",
          gridColumn: props.index % 2 === 0 ? "2" : "1",
          backgroundColor: "rebeccapurple",
        }}
      >
        Detailssss
      </Text>
    </Grid>
  );
};

export default Work;
