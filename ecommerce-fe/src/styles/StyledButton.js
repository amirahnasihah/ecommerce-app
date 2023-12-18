import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.hover_bg};
  }

  &:active {
    transform: scale(0.9);
    background-color: ${({ theme }) => theme.colors.active_bg};
  }

  /* Responsive styles for mobile */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 0 auto;
    display: block;
  }
`;
