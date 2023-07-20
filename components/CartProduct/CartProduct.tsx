import { CartProductProp } from "@/types";
import Style from "./style.module.css";
import Image from "next/image";

function CartProduct(props: CartProductProp) {
  const { image, title, price } = props.productInfo;

  return (
    <div className={Style.mainContainer}>
      <Image src={image} height={50} width={50} alt="product Img" />
      <div className={Style.infoContainer}>
        <p className={Style.title}>{title}</p>
        <p className={Style.price}>${price}</p>
      </div>
    </div>
  );
}

export default CartProduct;
