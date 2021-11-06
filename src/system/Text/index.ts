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
} from "styled-system";

interface Props extends SpaceProps, ColorProps, FontSizeProps, TypographyProps {
  children: React.ReactNode;
}

const Text = styled.p<Props>(fontSize, space, color, typography);

Text.defaultProps = {
  fontSize: "md",
  fontWeight: "medium",
};

export default Text;
