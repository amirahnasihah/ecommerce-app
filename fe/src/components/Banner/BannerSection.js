import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../styles/StyledButton";

const BannerSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <section className="container" aria-label="Banner Section">
        <div className="banner-section-data">
          <h1>{name}</h1>
          <p>
            Explore our collection of cutting-edge electronic gadgets at the
            best prices. From smartphones to smart home devices, we've got
            everything you need to stay connected and enhance your digital
            lifestyle.
          </p>
          <NavLink to="/products">
            <StyledButton>Shop Now</StyledButton>
          </NavLink>
        </div>

        <div className="banner-section-image">
          <img src="/images/electronic.png" alt="Electronics Banner" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  img {
    max-width: 100%;
    height: auto;
  }

  .banner-section-data {
    text-align: center;

    p {
      margin: 1rem 0;
      padding: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
  }

  .banner-section-image {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default BannerSection;
