import styled from "styled-components";
import {
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  color,
  ColorProps,
} from "styled-system";

interface Props extends SpaceProps, ColorProps, FontSizeProps {
  children: React.ReactNode;
}

const Text = styled.p<Props>(fontSize, space, color);

export default Text;
