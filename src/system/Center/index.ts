import React from "react";
import styled from "styled-components";
import { color, layout, size } from "styled-system";
import { LayoutProps, ColorProps, SizeProps } from "styled-system";

interface Props extends LayoutProps, ColorProps, SizeProps {
  children: React.ReactNode;
}

const Center = styled.div<Props>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  color,
  layout,
  size
);

export default Center;
