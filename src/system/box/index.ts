import styled from "styled-components";
import {
  size,
  SizeProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from "styled-system";

interface BoxProps extends SizeProps, LayoutProps, PositionProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>(size, layout, position);

export default Box;
