import styled from "styled-components";
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

/** Props Interface */
interface TextProps
  extends SpaceProps,
    ShadowProps,
    ColorProps,
    FontSizeProps,
    TypographyProps {
  children: React.ReactNode;
}

/** Styled Text */
export const Text = styled.p<TextProps>(
  fontSize,
  space,
  color,
  typography,
  shadow
);

/** Default Props */
Text.defaultProps = {
  fontSize: "md",
  fontWeight: "medium",
  color: "white",
};
