import React from "react";
import { useSelector } from "react-redux";

import Item from "./item";

const Cart = () => {
  const total = useSelector(state => state.products.total);
  const cart = useSelector(state => state.products.cart);

  const renderProducts = () => {
    return cart.map(product => {
      return (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          inCart
        />
      );
    });
  };

  return (
    <div className="">
      <h1>Cart</h1>
      <h3>Total ${total.toFixed(2)}</h3>
      <div className="products">{renderProducts()}</div>
    </div>
  );
};

export default Cart;
