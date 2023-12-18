import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { useCartContext } from "../../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id: id, countInStock, name } = product;
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < countInStock ? setAmount(amount + 1) : setAmount(countInStock);
  };

  const handleAddToCart = () => {
    addToCart(id, amount, product, name);
  };

  return (
    <Wrapper>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={handleAddToCart}
        role="button"
        aria-label="Add this item to your cart"
        aria-disabled={amount <= 0}
      >
        <Button className="add-to-cart-btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    .amount-style {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;
export default AddToCart;
