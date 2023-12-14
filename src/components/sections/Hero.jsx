import React from "react";
import Header from "../Header";
import Link from "next/link";
import Image from "next/image";
import bg from "/public/images/doge_bg2.jpeg";
import stuff from "/public/images/hero.svg";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-[60vh] relative lg:min-h-screen overflow-hidden"
    >
      <div
        className=" absolute top-0 bottom-0 left-0
         right-0 object-cover w-full lg:h-full -z-10 opacity-50"
      >
        <Image
          src={bg}
          height={1000}
          width={1000}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:hidden absolute -top-8  -left-[5%] object-contain h-full w-full -z-10 opacity-90">
        <Image
          src={stuff}
          height={400}
          width={400}
          alt="image"
          className="object-contain  w-full "
        />
      </div>
      <div className="hidden lg:block absolute -top-5  -left-[20%] object-contain h-full  -z-10 opacity-90">
        <Image
          src={stuff}
          height={1000}
          width={1000}
          alt="image"
          className="object-contain h-full  "
        />
      </div>
      <div className="hero2 h-[50vh] lg:h-full w-full ">
        <Header />
      </div>
      <div className="lg:flex">
        <div className="lg:w-2/5"></div>
        <div className="bg-white lg:bg-transparent lg:mt-28 pt-10 px-6 text-center lg:w-1/2 lg:h-full">
          <p className="text-base mt-2 font-medium lg:text-lg md:w-2/3 mx-auto lg:w-full">
            A drc20 free mint to honor Billy Markus Creator of Dogecoin. Billy
            Markus thinks we&apos;re &apos;all this stuff is like… interesting
            haha very beta.
          </p>
          <h1 className="text-2xl text-center font-bold lg:text-5xl mt-5 ">
            START USING BM2K TODAY
          </h1>

          <div className="flex space-x-8 justify-center mt-6 pb-10 max-[300px]:flex-col max-[300px]:space-x-0 max-[300px]:space-y-2 lg:text-lg">
            <Link href="https://doggy.market/bm2k">
              <button className="bg-primary px-6 py-2 rounded-2xl text-white font-medium  hover:border-secondary hover:border-2 duration-100">
                Doggy.Market
              </button>
            </Link>
            <Link href="https://drc-20.org/marketplace/drc20/bm2k">
              <button className="bg-primary px-6 py-2 rounded-2xl text-white font-medium hover:border-secondary hover:border-2 duration-100">
                Drc-20.org
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
