import React from "react";
import FormatPrice from "../../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, price, amount }) => {
  const { setIncrease, setDecrease, removeItem } = useCartContext();

  const handleDecrease = () => setDecrease(id);
  const handleIncrease = () => setIncrease(id);

  return (
    <article className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <figure>
          <img src={image} alt={name} />
        </figure>

        <p>{name}</p>
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={handleDecrease}
        setIncrease={handleIncrease}
      />

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </article>
  );
};

export default CartItem;
