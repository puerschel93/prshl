import styled from "styled-components";
import { color, layout, size } from "styled-system";

const Center = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  color,
  layout,
  size
);

export default Center;
