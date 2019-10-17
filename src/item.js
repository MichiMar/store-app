import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "./store/actions/products";
import { removeFromCart } from "./store/actions/products";

const Item = props => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <img src="https://source.unsplash.com/random" alt="img" />
      <div className="meta">
        <div className="top-level">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>

        <p>{props.description}</p>

        <div className="btn">
          {props.inCart ? (
            <button onClick={() => dispatch(removeFromCart(props.id))}>
              Remove
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(props.id))}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
