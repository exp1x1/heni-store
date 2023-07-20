"use client";

import NavBar from "../../components/NavBar/NavBar";
import style from "./style.module.css";
import CartProduct from "@/components/CartProduct/CartProduct";
import { useEffect, useState } from "react";
import Link from "next/link";
import { product, productArray } from "@/types";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
  const [orderItem, setOrderItem] = useState<productArray>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("orderItem") !== null) {
      const data = localStorage.getItem("orderItem")!;
      const objData = JSON.parse(data);

      setOrderItem(objData);
    }
  }, []);

  useEffect(() => {
    let totalPrice = orderItem.reduce((acc: number, item: product) => {
      return acc + item.price;
    }, 0);
    totalPrice = parseFloat(totalPrice.toFixed(2)); // turn number to have only two decimal places

    setTotalPrice(totalPrice);
  }, [orderItem]);

  const buyProduct = () => {
    setOrderItem([]);
    localStorage.clear();
  };

  const orderItemElement = (
    <div className={style.secondContainer}>
      <div className={style.productContainer}>
        {orderItem.map((item: product) => {
          return <CartProduct key={uuidv4()} productInfo={item} />;
        })}
      </div>
      <div className={style.summaryContainer}>
        <p>Summary</p>
        <div className={style.summary}>
          <p className={style.itemInfo}>
            <span>Total Item</span>
            <span>: {orderItem.length}</span>
          </p>
          <p className={style.priceInfo}>
            <span>Total Price</span>
            <span>: $ {totalPrice}</span>
          </p>
        </div>
      </div>
      <button className={style.mainBtn} onClick={buyProduct}>
        Buy
      </button>
    </div>
  );

  const noOrderElement = (
    <div>
      <p>Cart is empty</p>
      <Link href={"../Shop"}>Shop Now</Link>
    </div>
  );

  return (
    <div className={style.mainContainer}>
      <NavBar />
      {orderItem.length !== 0 ? orderItemElement : noOrderElement}
    </div>
  );
}
