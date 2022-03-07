import React from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
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
interface FlexProps
  extends LayoutProps,
    ColorProps,
    SizeProps,
    PositionProps,
    FlexboxProps,
    SpaceProps,
    BorderProps {
  children?: React.ReactNode;
  spacing?: number;
}

/** Styled Flex */
export const Flex = styled.div<FlexProps>(
  color,
  layout,
  size,
  position,
  flexbox,
  space,
  border
);
