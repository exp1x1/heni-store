"use client";

import Style from "./style.module.css";

import NavBar from "../../components/NavBar/NavBar";
import Product from "@/components/Product/Product";
import { product, productArray } from "@/types";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Shop() {
  const [shopItems, setShopItems] = useState<productArray>([]);
  const [orderItem, setOrderItem] = useState<productArray>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
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

    if (localStorage.getItem("orderItem") !== null) {
      const data = localStorage.getItem("orderItem")!;
      const objData = JSON.parse(data);

      setOrderItem(objData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orderItem", JSON.stringify(orderItem));

    // console.log(JSON.parse(localStorage.getItem("orderItem")));
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

      <div className={Style.productContainer}>
        {shopItems.map((item: product) => {
          const buyState = checkDidBuy(item.id);

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
    </div>
  );
}
