import styled from "styled-components";
import {
  fontSize,
  FontSizeProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

interface TextProps
  extends SpaceProps,
    ShadowProps,
    ColorProps,
    FontSizeProps,
    TypographyProps {
  children: React.ReactNode;
}

const Text = styled.p<TextProps>(fontSize, space, color, typography, shadow);

Text.defaultProps = {
  fontSize: "md",
  fontWeight: "medium",
};

export default Text;
