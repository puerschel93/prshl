import styled from "styled-components";
import {
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  shadow,
  ShadowProps,
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
