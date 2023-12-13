import React from "react";
import Header from "../Header";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-primary min-h-[60vh] hero ">
      <div className="hero2 h-[50vh] ">
        <Header />
      </div>
      <div className="bg-white  pt-10 px-6 text-center">
        <h1 className="text-2xl text-center font-bold ">
          START USING BM2K TODAY
        </h1>
        <p className="text-base mt-2 font-medium">
          A drc20 free mint to honor Billy Markus Creator of Dogecoin. Billy
          Markus thinks we&apos;re &apos;all this stuff is like… interesting
          haha very beta.
        </p>

        <div className="flex space-x-8 justify-center mt-6 pb-10">
          <Link href="#">
            <button className="bg-primary px-6 py-2 rounded-2xl text-white font-medium  hover:border-secondary hover:border-2 duration-100">
              Doggy.Market
            </button>
          </Link>
          <Link href="#">
            <button className="bg-primary px-6 py-2 rounded-2xl text-white font-medium hover:border-secondary hover:border-2 duration-100">
              Drc-20.org
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
