import styled from "styled-components";
import {
  fontSize,
  FontSizeProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from "styled-system";

interface LinkProps extends FontSizeProps, ColorProps, SpaceProps {
  children?: React.ReactNode;
}

const Link = styled.a<LinkProps>(fontSize, color, space, {
  textDecoration: "none",
  opacity: 0.5,
  fontFamily: '"Inter", sans-serif',
  "&:hover": {
    opacity: 0.8,
    textDecoration: "underline",
  },
});

Link.defaultProps = {
  fontSize: "sm",
  color: "white",
  target: "_blank",
};

export default Link;
