import Image from "next/image";
import React from "react";
import logo1 from "../../../public/images/billy_logo-removebg-preview.png";
import logo2 from "../../../public/images/doggy_market.svg";
import logo3 from "../../../public/images/doggy_lab.svg";

export default function Backed() {
  return (
    <div className="container mx-auto bg-white pt-10">
      <h2 className="text-2xl text-center  mb-5">Backed By:</h2>
      <div className="flex justify-evenly item-center">
        <div className="">
          <div className="h-14 w-14 flex flex-col  items-center justify-between ">
            <Image src={logo1} height={1000} width={1000} alt="logo" />
            <p className="text-center whitespace-nowrap font-semibold">
              Billy Markus
            </p>
          </div>
        </div>

        <div className="h-28 w-28  overflow-hidden">
          <Image src={logo2} height={1000} width={1000} alt="logo" />
        </div>
        <div className="h-20 w-20 overflow-hidden">
          <Image src={logo3} height={1000} width={1000} alt="logo" />
        </div>
      </div>
    </div>
  );
}
