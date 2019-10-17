import React from "react";
import { useSelector } from "react-redux";

import Item from "./item";

const Home = () => {
  const products = useSelector(state => state.products.products);

  const renederProducts = () => {
    return products.map(product => {
      return (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      );
    });
  };

  return (
    <div className="home">
      <h1>Home</h1>

      <div className="products">{renederProducts()}</div>
    </div>
  );
};

export default Home;
