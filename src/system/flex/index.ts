import React from "react";
import styled from "styled-components";
import { color, layout, size } from "styled-system";
import {
  LayoutProps,
  ColorProps,
  SizeProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from "styled-system";

interface FlexProps
  extends LayoutProps,
    ColorProps,
    SizeProps,
    PositionProps,
    FlexboxProps,
    SpaceProps {
  children: React.ReactNode;
  spacing?: number;
}

const spacing = (props: FlexProps) => `
  gap: ${mapSpacing(props.spacing)};
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

const Flex = styled.div<FlexProps>(
  {
    display: "flex",
  },
  spacing,
  color,
  layout,
  size,
  position,
  flexbox,
  space
);

export default Flex;
