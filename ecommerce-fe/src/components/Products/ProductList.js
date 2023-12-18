import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";
import Product from "./Product";
import { useProductContext } from "../../context/productcontext";
import { StyledButton } from "../../styles/StyledButton";
import LoadingAnimation from "../../styles/LoadingStyle";

const ProductList = () => {
  const { filter_products, per_page, handleLoadMore } = useFilterContext();
  const { isLoading } = useProductContext();

  const displayedProducts = filter_products.slice(0, per_page);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (filter_products.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item </h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {displayedProducts.map((currentEl, index) => (
          <Product key={index} {...currentEl} />
        ))}
      </div>

      <div className="load-more-btn">
        {!isLoading && (
          <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 120rem;
    gap: 3rem;
  }

  .load-more-btn {
    padding: 4rem 0;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    border-radius: 1.5rem;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      margin-top: 0.1rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
  }
`;

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export default ProductList;
