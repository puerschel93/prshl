import React from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  grid,
  GridProps,
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
    GridProps,
    SpaceProps,
    BorderProps {
  children: React.ReactNode;
  spacing?: number;
  spacingX?: number;
  spacingY?: number;
}

/** Styled Grid */
export const Grid = styled.div<FlexProps>(
  color,
  layout,
  size,
  position,
  grid,
  space,
  border
);
