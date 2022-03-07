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

interface TextProps
  extends SpaceProps,
    ShadowProps,
    ColorProps,
    FontSizeProps,
    TypographyProps {
  children: React.ReactNode;
}

export const Text = styled.p<TextProps>(
  fontSize,
  space,
  color,
  typography,
  shadow
);

Text.defaultProps = {
  fontSize: "md",
  fontWeight: "medium",
};
