import styled from "styled-components";
import FilterSection from "../components/Products/FilterSection";
import ProductList from "../components/Products/ProductList";
import { useFilterContext } from "../context/filter_context";

const Products = () => {
  const { filter_products } = useFilterContext();

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <aside>
          <FilterSection />
        </aside>

        <main>
          <section>
            <div className="main-product">
              <div className="product-length">
                <p>{`${filter_products.length} Products Available`}</p>
              </div>
              <ProductList />
            </div>
          </section>
        </main>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-length {
    margin-top: 3rem;
  }

  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
