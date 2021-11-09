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
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "1.5px",
    background: "salmon",
    transition: "0.4s ease-in-out",
  },
  "&:hover": {
    opacity: 0.8,
    "&:before": {
      width: "100%",
    },
  },
});

Link.defaultProps = {
  fontSize: "sm",
  color: "white",
  target: "_blank",
};

export default Link;
