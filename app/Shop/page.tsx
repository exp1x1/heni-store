"use client";

import Style from "./style.module.css";

import NavBar from "../../components/NavBar/NavBar";
import Product from "@/components/Product/Product";
import { product, productArray } from "@/types";

import { useState, useEffect, ReactElement, StrictMode } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Shop() {
  const [shopItems, setShopItems] = useState<productArray>([]);
  const [orderItem, setOrderItem] = useState<productArray>([]);

  useEffect(() => {
    // if (localStorage.getItem("orderItem") === null) {
    //   localStorage.setItem("orderItem", JSON.stringify(orderItem));
    // }

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      .then((json) => {
        setShopItems((prevItems) => {
          prevItems = json;
          return prevItems;
        });
      })

      .then(() => {
        if (localStorage.getItem("shopItem") === null) {
          localStorage.setItem("shopItem", JSON.stringify(shopItems));
        }
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("orderItem", JSON.stringify(orderItem));
    console.log(orderItem);
    // return () => {};
  }, [orderItem]);

  const addProductToCart = (productNumber: number) => {
    const order: productArray = [];
    shopItems.forEach((item: product) => {
      if (item.id === productNumber) {
        order.push(item);
      }
    });

    setOrderItem((prevOrder) => {
      prevOrder = [...prevOrder, ...order];

      return prevOrder;
    });
  };

  const removeProductToCart = (productNumber: number) => {
    // console.log(orderItem);
    // const orders = orderItem;

    // const index = orders.findIndex((item) => item.id === productNumber);
    // orders.splice(index, 1);
    // console.log(orders);
    // setOrderItem(orders);

    const currOrder = orderItem.filter(
      (item) => item.id !== productNumber
    );

    setOrderItem(currOrder);
  };

  const checkDidBuy = (productId: number) => {
    let state = false;
    orderItem.forEach((item) => {
      if (productId === item.id) {
        state = true;
      }
    });

    return state;
  };

  return (
    <div className={Style.mainContainer}>
      <NavBar />
      {/* <button onClick={() => console.log(shopItems)}>click me </button> */}

      <StrictMode>
        <div className={Style.productContainer}>
          {shopItems.map((item: product) => {
            const buyState = checkDidBuy(item.id);
            console.log(buyState);
            return (
              <Product
                key={uuidv4()}
                productInfo={item}
                addProductEventHandler={addProductToCart}
                removeProductEventHandler={removeProductToCart}
                didBuy={buyState}
              />
            );
          })}
        </div>
      </StrictMode>
    </div>
  );
}
