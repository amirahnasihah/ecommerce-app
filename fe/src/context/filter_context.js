import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  filters: {
    text: "",
  },
  per_page: 9,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (value) => {
    dispatch({ type: "GET_SORT_VALUE", payload: value });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const handleLoadMore = () => {
    dispatch({ type: "LOAD_MORE_PRODUCTS" });
  };

  useEffect(() => {
    if (state.per_page > 0) {
      dispatch({ type: "FILTER_PRODUCTS" });
    }
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters, state.per_page]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
        handleLoadMore,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
