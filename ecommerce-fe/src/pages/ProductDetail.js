import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/Header/PageNavigation";
import { Container } from "../styles/Container";
import MyImage from "../components/Products/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import AddToCart from "../components/AddToCart/AddToCart";
import { LoadingMessage } from "../styles/LoadingMessage";

const ProductDetail = () => {
  const { getSingleProduct, isProductLoading, singleProduct, API } =
    useProductContext();
  const { id } = useParams();

  const {
    _id: productId,
    name,
    price,
    description,
    countInStock,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/api/products/${id}`);
  }, [id]);

  return (
    <Wrapper>
      <PageNavigation title={name} />

      {isProductLoading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : (
        <Container className="container">
          <div className="grid grid-two-column">
            <div className="product_images">
              <MyImage image={image} name={name} />
            </div>

            <section className="product-data">
              <h2>{name}</h2>
              <div className="product-data-price">
                <p>
                  PRICE: <FormatPrice price={price} />
                </p>
              </div>

              <p>{description}</p>

              <div className="product-data-info">
                <p>
                  Available:{" "}
                  <span>
                    {countInStock > 0
                      ? `In Stock [ ${countInStock} ]`
                      : "Not Available"}
                  </span>
                </p>
              </div>
              <hr />
              {countInStock > 0 && <AddToCart product={singleProduct} />}
            </section>
          </div>
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    text-transform: uppercase;

    .product-data-price {
      p {
        font-weight: bold;
      }
    }

    span {
      font-weight: bold;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default ProductDetail;
