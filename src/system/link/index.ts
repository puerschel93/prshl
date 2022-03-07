import styled from "styled-components";
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from "styled-system";

interface LinkProps extends FontSizeProps, ColorProps, SpaceProps {
  children?: React.ReactNode;
}

export const Link = styled.a<LinkProps>(fontSize, color, space, {
  textDecoration: "none",
  opacity: 0.5,
  fontFamily: '"Inter", sans-serif',
  transition: "all 0.05s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});
