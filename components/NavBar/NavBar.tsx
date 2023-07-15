import Link from "next/link";
import style from "./style.module.css";
import { Lobster, Exo_2 } from "next/font/google";
import { ClientRequest } from "http";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: "400",
});

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div>
        <Link href={"/"} className={`${style.logo}  ${lobster.className}`}>
          Henicos
        </Link>
      </div>
      <div className={`${style.navigation} ${exo_2.className}`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/Shop"}>Shop</Link>
        <Link href={"/Cart"} className={style.Cart}>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
