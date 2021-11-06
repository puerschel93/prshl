import styled from "styled-components";
import { size, SizeProps, layout, LayoutProps } from "styled-system";

interface BoxProps extends SizeProps, LayoutProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>(size, layout);

export default Box;
