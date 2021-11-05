import styled from "styled-components";
import { position, color, fontSize, variant, layout } from "styled-system";

const Text = styled.p(
  {
    color: "white",
    fontFamily: "Integral",
    fontSize: ["0rem", "0.75rem", "1rem", "5rem"],
  },
  variant({
    variants: {
      headline: {
        fontSize: ["2rem", "2.5rem", "3rem", "4rem"],
        fontFamily: "IntegralHeavy",
      },
    },
  }),
  fontSize,
  color,
  position,
  layout
);

export default Text;
