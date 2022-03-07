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

/** Props Interface */
interface CenterProps
  extends LayoutProps,
    ColorProps,
    SizeProps,
    PositionProps,
    FlexboxProps {
  children?: React.ReactNode;
}

/** Styled Center */
export const Center = styled.div<CenterProps>(
  color,
  layout,
  size,
  position,
  flexbox
);

/** Default Props */
Center.defaultProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
};
