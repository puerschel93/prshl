import styled from "styled-components";
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from "styled-system";

/** Props Interface */
interface LinkProps extends FontSizeProps, ColorProps, SpaceProps {
  children?: React.ReactNode;
}

/** Styled Link */
export const Link = styled.a<LinkProps>(fontSize, color, space);
