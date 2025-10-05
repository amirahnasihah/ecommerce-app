import styled from "styled-components";
import { useFilterContext } from "../../context/filter_context";
import { FaFilter } from "react-icons/fa";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
    sorting,
  } = useFilterContext();

  return (
    <Wrapper>
      <form className="filter-search">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
        />
      </form>

      <nav>
        <FilterGroup>
          <h3>
            <FaFilter /> Sort By
          </h3>
          <ul>
            <li>
              <button
                type="button"
                className={sorting === "lowest" ? "active" : ""}
                onClick={() => sorting("lowest")}
              >
                Price (Lowest)
              </button>
            </li>
            <li>
              <button
                type="button"
                className={sorting === "highest" ? "active" : ""}
                onClick={() => sorting("highest")}
              >
                Price (Highest)
              </button>
            </li>
          </ul>
        </FilterGroup>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
`;

const FilterGroup = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;

    li {
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
`;

export default FilterSection;
