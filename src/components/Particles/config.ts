import { ISourceOptions } from "tsparticles";

export const config: ISourceOptions = {
  background: {
    color: {
      value: "#0C0C0C",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    zIndex: 1,
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        mode: "repulse",
      },
      onHover: {
        mode: "none",
        parallax: {
          enable: true,
          force: 25,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 0.3,
        opacity: 1,
        size: 4,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#FBD8D4",
    },
    links: {
      blink: true,
      color: {
        value: "#FBD8D4",
      },
      consent: true,
      enable: true,
      frequency: 6,
      opacity: 0.1,
      triangles: {
        frequency: 5,
      },
      width: 1.5,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      path: {},
      outMode: "bounce",
      speed: 0.5,
      spin: {},
      trail: {
        length: 20,
      },
      warp: true,
    },
    number: {
      density: {
        enable: true,
      },
      value: 85,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: {
        min: 0.1,
        max: 0.3,
      },
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 1,
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
};
