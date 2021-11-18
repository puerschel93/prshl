import React from "react";
import styled from "styled-components";
import { color, layout, size } from "styled-system";
import {
  GridProps,
  grid,
  ColorProps,
  SizeProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  LayoutProps,
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

const spacing = (props: FlexProps) => `
  grid-gap: ${mapSpacing(props.spacing)};
`;

const spacingX = (props: FlexProps) => `
  column-gap: ${mapSpacing(props.spacingX)};
`;

const spacingY = (props: FlexProps) => `
  row-gap: ${mapSpacing(props.spacingY)};
`;

const mapSpacing = (spacing?: number): string => {
  if (spacing === 0 || !spacing) return "0";
  if (spacing === 1) return "0.25rem";
  if (spacing === 2) return "0.5rem";
  if (spacing === 3) return "1rem";
  if (spacing === 4) return "1.5rem";
  if (spacing === 5) return "2rem";
  if (spacing === 6) return "3rem";
  if (spacing === 7) return "4rem";
  if (spacing === 8) return "5rem";
  if (spacing === 9) return "6rem";
  if (spacing === 10) return "7rem";
  if (spacing === 11) return "8rem";
  else return "9rem";
};

const Grid = styled.div<FlexProps>(
  {
    display: "grid",
    width: "100%",
  },
  spacing,
  spacingX,
  spacingY,
  color,
  layout,
  size,
  position,
  grid,
  space,
  border
);

export default Grid;
