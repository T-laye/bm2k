import Image from "next/image";
import React from "react";
import dogs from "../../../public/images/dogs.svg";

export default function About() {
  return (
    <div id="about">
      <div className="container mx-auto px-6 min-h-[60vh] lg:min-h-[80vh] pb-20 lg:pb-10 ">
        <h2 className="text-2xl mt-5 font-semibold lg:hidden">ABOUT US</h2>
        <div className="lg:flex flex-row-reverse lg:mt-20 items-center">
          <div className="lg:w-1/2 lg:ml-10">
            <h2 className="text-2xl mt-5 font-semibold lg:text-3xl hidden lg:block lg:text-center">
              ABOUT US
            </h2>
            <p className="mt-2 text-base">
              BM2k is a DRC20 (free mint) token created to pay tribute to Billy
              Markus, the creator of Dogecoin. It had a fair launch and was
              officially the first DRC20 token to reach Billy&apos;s Dogecoin
              wallet. Additionally, it was the inaugural DRC20 token to publicly
              complete a transaction for the purchase and sale of a real service
              and also a doginals NFT using DRC20. Bm2k is Currently, it stands
              as one of the top DRC20 tokens with the highest trading volume.
              BM2k was affectionately called &apos;interesting haha&apos;
              &apos;very beta&apos;. by Billy Markus and was created by Ryuushi,
              a fan and admirer of Billy Markus, who played a significant role
              in the development of the Doginals protocol alongside Apezord.
              Billy Markus thinks we&apos;re &apos;all this stuff is like…
              interesting haha very &apos;beta. Billy Markus
            </p>
          </div>

          <div className="h-full w-full mt-10 lg:w-1/2">
            <Image
              src={dogs}
              height={100}
              width={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
