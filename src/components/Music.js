import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Item from "./Item";

const Music = () => {
  const { productsArr } = useContext(StoreContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Music Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsArr.map((el, i) => (
          <Item
            key={i}
            imageUrl={el.imageUrl}
            title={el.title}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
