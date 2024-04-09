import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartList, setCartList, productsArr } = useContext(StoreContext);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let newSubTotal = 0;
    let newTotalQuantity = 0;

    cartList.forEach((el) => {
      const product = productsArr.find((item) => item.id === el.id);
      newTotalQuantity += el.quantity;
      newSubTotal += product.price * el.quantity;
    });

    setTotalQuantity(newTotalQuantity);
    setSubTotal(newSubTotal);
  }, [cartList, productsArr]);

  const buyButtonHandler = () => {
    setCartList([]);
    setSubTotal(0);
    setTotalQuantity(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartList.length > 0 ? (
        <>
          {cartList.map((el) => {
            const product = productsArr.find((item) => item.id === el.id);
            return (
              <CartItem
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                quantity={el.quantity}
              />
            );
          })}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl">
              Total Quantity:{" "}
              <span className="font-semibold">{totalQuantity}</span>
            </p>
            <p className="text-xl">
              SubTotal:{" "}
              <span className="font-semibold">&#8377; {subTotal}</span>
            </p>
          </div>
          <button
            onClick={buyButtonHandler}
            className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Buy
          </button>
        </>
      ) : (
        <p className="text-xl">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
