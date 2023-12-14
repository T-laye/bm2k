import Image from "next/image";
import React from "react";
import logo1 from "../../../public/images/billy_logo-removebg-preview.png";
import logo2 from "../../../public/images/doggy_market.svg";
import logo3 from "../../../public/images/doggy_lab.svg";

export default function Backed() {
  return (
    <div className="container mx-auto bg-white pt-10">
      <h2 className="text-2xl text-center  mb-5">Backed By:</h2>
      <div className="flex justify-evenly item-center  ">
        <div className=" w-14 max-[300px]:w-10 lg:w-32">
          <div className="h-full w-full flex flex-col  items-center justify-between max-[300px]:justify-start ">
            <Image src={logo1} height={1000} width={1000} alt="logo" />
            <p className="text-center lg:text-3xl whitespace-nowrap font-semibold max-[300px]:text-sm">
              Billy Markus
            </p>
          </div>
        </div>

        <div className="h-28 w-28 max-[300px]:w-20 lg:w-52 ">
          <Image src={logo2} height={1000} width={1000} alt="logo" />
        </div>
        <div className="h-20 w-20 lg:w-40 max-[300px]:w-14">
          <Image src={logo3} height={1000} width={1000} alt="logo" />
        </div>
      </div>
    </div>
  );
}
