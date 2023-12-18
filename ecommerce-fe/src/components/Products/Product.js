import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";

const Product = ({ _id, name, image, price }) => (
  <article className="card">
    <NavLink to={`/product/${_id}`}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p>{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </NavLink>
  </article>
);

export default Product;
