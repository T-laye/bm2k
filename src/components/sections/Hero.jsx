import React from "react";
import Header from "../Header";
import Link from "next/link";
import Image from "next/image";
import bg from "/public/images/doge_bg2.jpeg";
import stuff from "/public/images/hero.svg";

export default function Hero() {
  return (
    <div className="min-h-[60vh] relative lg:min-h-screen overflow-hidden">
      <div
        className=" absolute top-0 bottom-0 left-0
         right-0 object-cover w-full -z-10 opacity-70"
      >
        <Image
          src={bg}
          height={1000}
          width={1000}
          alt="image"
          className="object-cover w-full "
        />
      </div>
      <div
        className=" absolute top-0  left-0
          object-cover w-1/2 -z-10 opacity-70"
      >
        <Image
          src={stuff}
          height={1000}
          width={1000}
          alt="image"
          className="object-cover w-full "
        />
      </div>
      <div className="hero2 h-[50vh] ">
        <Header />
      </div>
      <div className="bg-white lg:bg-transparent  pt-10 px-6 text-center">
        <h1 className="text-2xl text-center font-bold ">
          START USING BM2K TODAY
        </h1>
        <p className="text-base mt-2 font-medium">
          A drc20 free mint to honor Billy Markus Creator of Dogecoin. Billy
          Markus thinks we&apos;re &apos;all this stuff is like… interesting
          haha very beta.
        </p>

        <div className="flex space-x-8 justify-center mt-6 pb-10 max-[300px]:flex-col max-[300px]:space-x-0 max-[300px]:space-y-2">
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
