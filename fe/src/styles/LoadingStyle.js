import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.mainLogo};
  border-radius: 50%;
  margin: auto;
`;

const LoadingAnimation = () => {
  return (
    <LoadingStyle
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default LoadingAnimation;
