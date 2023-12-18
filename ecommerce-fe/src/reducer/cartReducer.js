const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id === id);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((currentElem) => {
      if (currentElem.id === action.payload) {
        let decAmount = currentElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...currentElem,
          amount: decAmount,
        };
      } else {
        return currentElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((currentElem) => {
      if (currentElem.id === action.payload) {
        let incAmount = currentElem.amount + 1;

        if (incAmount >= currentElem.max) {
          incAmount = currentElem.max;
        }

        return {
          ...currentElem,
          amount: incAmount,
        };
      } else {
        return currentElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (currentItem) => currentItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accumulated, currentElem) => {
        let { price, amount } = currentElem;

        accumulated.total_item += amount;
        accumulated.total_price += price * amount;

        return accumulated;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
