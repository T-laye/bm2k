import Image from "next/image";
import React from "react";

export default function Card({ icon, title, text }) {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      className="card-shadow h-[390px] w-[350px] max-[300px]:w-[250px] max-[300px]:h-[350px]   rounded-2xl px-5 mt-8 py-5 bg-[#faf4ff] flex flex-col justify-evenly items-center"
    >
      <div className="h-32 w-32 object-contain ">
        <Image
          src={icon}
          height={100}
          width={100}
          alt="icon"
          className="object-contain h-full w-full"
        />
      </div>
      <h3 className="text-[24px]  text-[#6f60be] text-center max-[300px]:text-lg">
        {title}
      </h3>
      <p className=" text-[20px] text-center max-[300px]:text-sm">{text}</p>
    </div>
  );
}
