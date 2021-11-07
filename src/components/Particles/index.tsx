import Particles from "react-tsparticles";
import Box from "system/box";
import { config } from "./config";

const BackgroundParticles = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="absolute"
      left="0"
      top="0"
      zIndex={1}
    >
      <Particles id="tsparticles" options={config} />;
    </Box>
  );
};

export default BackgroundParticles;
