import React from "react";
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
} from "styled-system";

interface CenterProps
  extends LayoutProps,
    ColorProps,
    SizeProps,
    PositionProps,
    FlexboxProps {
  children?: React.ReactNode;
}

export const Center = styled.div<CenterProps>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  color,
  layout,
  size,
  position,
  flexbox
);
