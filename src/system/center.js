import styled from "styled-components";
import { color, layout, flexbox, position, space } from "styled-system";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${color}
  ${layout}
  ${flexbox}
  ${position}
  ${space}
`;

export default Center;
