const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_MORE_PRODUCTS":
      const perPage = state.per_page + 3;
      const newFilterProducts = state.all_products.slice(
        state.per_page,
        perPage
      );
      return {
        ...state,
        filter_products: [...state.filter_products, ...newFilterProducts],
        per_page: perPage,
      };

    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters },
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currentEl) => {
          return currentEl.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
