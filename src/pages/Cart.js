import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartList, productsArr } = useContext(StoreContext);

  return (
    <div>
      {cartList.map((el) => {
        const product = productsArr.find((item) => item.id === el);
        return (
          <CartItem
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Cart;
