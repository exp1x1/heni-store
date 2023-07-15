"use client";
import Link from "next/link";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import Style from "./style.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  

  return (
    <div className={Style.mainBody}>
      <NavBar />
      <div className={Style.secondBody}>
        <p>
          <span className={Style.tx1}>Best.</span>
          <span className={Style.tx2}>Affordable.</span>
          <span className={Style.tx3}>Reliable.</span>
        </p>

        <Link href={"./Shop"} className={Style.shopBtn}>
          Shop Now
        </Link>
      </div>
      {/* <button
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem('mainItem')));
        }}
      >
        click me{" "}
      </button> */}
    </div>
  );
}
