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

export const Grid = styled.div<FlexProps>(
  {
    display: "grid",
    width: "100%",
  },
  color,
  layout,
  size,
  position,
  grid,
  space,
  border
);
