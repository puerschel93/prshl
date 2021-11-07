import styled from "styled-components";
import {
  size,
  SizeProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  color,
  ColorProps,
} from "styled-system";

interface BoxProps
  extends SizeProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    SpaceProps,
    ColorProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>(
  size,
  layout,
  position,
  flexbox,
  space,
  color,
  {
    display: "flex",
  }
);

export default Box;
