"use client";

import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Product from "@/components/Product/Product";
import { product } from "@/types";
import { v4 as uuidv4 } from "uuid";

export default function Shop() {
  const [shopItems, setShopItems] = useState([]);
  const [mainItem, setMainItem] = useState({ order: {} });

  useEffect(() => {
    if (localStorage.getItem("mainItem") === null) {
      localStorage.setItem("mainItem", JSON.stringify(mainItem));
    }
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setShopItems((prevItems) => {
          prevItems = json;
          return prevItems;
        });
      });
  }, []);

  const tred = (arg: number) => {
    console.log(arg);
  };

  return (
    <>
      <NavBar />
      {/* <button onClick={() => console.log(shopItems)}>click me </button> */}
      <div>
        {shopItems.map((item: product) => {
          return (
            <Product
              key={uuidv4()}
              productInfo={item}
              addProductEventHandler={tred}
            />
          );
        })}
      </div>
    </>
  );
}
