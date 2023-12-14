import Image from "next/image";
import React from "react";
import logo1 from "../../../public/images/billy_logo.svg";
import logo2 from "../../../public/images/doggy_market.svg";
import logo3 from "../../../public/images/doggy_lab.svg";

export default function Backed() {
  return (
    <div className="container mx-auto bg-white pt-10">
      <h2 className="text-2xl text-center  mb-5">Backed By:</h2>
      <div className="flex justify-evenly item-center  ">
       

        <div className="h-28 w-28 max-[300px]:w-20 lg:w-52 ">
          <Image src={logo1} height={1000} width={1000} alt="logo" />
        </div>
        <div className="h-28 w-28 max-[300px]:w-20 lg:w-52 mt-2">
          <Image src={logo2} height={1000} width={1000} alt="logo" />
        </div>
        <div className="h-24 w-24 lg:w-40 max-[300px]:w-14">
          <Image src={logo3} height={1000} width={1000} alt="logo" />
        </div>
      </div>
    </div>
  );
}
