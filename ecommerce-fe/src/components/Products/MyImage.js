import React from "react";
import styled from "styled-components";

const MyImage = ({ image = [{ url: "" }], name }) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      height: auto;
    }
  }
`;

export default MyImage;
