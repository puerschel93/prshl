import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  size,
  SizeProps,
  space,
  SpaceProps,
} from "styled-system";

/** Props Interface */
interface BoxProps
  extends SizeProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    SpaceProps,
    ColorProps {
  children?: React.ReactNode;
}

/** Styled Box */
export const Box = styled.div<BoxProps>(
  size,
  layout,
  position,
  flexbox,
  space,
  color
);

/** Default Props */
Box.defaultProps = {
  display: "flex",
};
