import { productProp } from "@/types";
import Image from "next/image";
import Style from "./style.module.css";

function Product(props: productProp) {
  const { id, title, image, price, rating } = props.productInfo;
  const { count, rate } = rating;

  return (
    <div className={Style.mainBox}>
      <Image
        className={Style.mainImg}
        src={image}
        width={100}
        height={100}
        alt="productImg"
        priority={true}
      />
      <p className={Style.mainTitle}>{title}</p>
      <div className={Style.mainPrice}>
        <span>MRP: ${price}</span>
      </div>
      <div className={Style.mainRating}>
        Rating:{rate}({count})
      </div>

      {props.didBuy ? (
        <button
          className={Style.mainBtn}
          onClick={() => {
            // eventHandler();
            props.removeProductEventHandler(id);
          }}
        >
          remove me
        </button>
      ) : (
        <button
          className={Style.mainBtn}
          onClick={() => {
            // eventHandler();
            props.addProductEventHandler(id);
          }}
        >
          add to cart
        </button>
      )}
      {/* <button onClick={() => eventHandler()}>click me</button> */}
    </div>
  );
}

export default Product;
