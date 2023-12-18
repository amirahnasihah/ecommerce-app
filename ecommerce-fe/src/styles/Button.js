import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem 2rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_bg};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active_bg};
  }
`;
