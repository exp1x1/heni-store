import { productProp } from "@/types";
import React from "react";
import Image from "next/image";

function Product(props: productProp) {
  const { id, title, image, price, rating } = props.productInfo;
  const { count, rate } = rating;

  return (
    <div>
      <Image src={image} width={400} height={400} alt="productImg" />
      <title>{title}</title>
      <div>
        <span>MRP:{price}</span>
      </div>
      <div className="">
        Rating:{rate}({count})
      </div>
      <button onClick={props.addProductEventHandler(id)}>
        add to cart
      </button>
    </div>
  );
}

export default Product;
