import Image from "next/image";
import React from "react";
import bigdog from "../../../public/images/bigdog.svg";
import FaqCard from "../FaqCard";
import Footer from "./Footer";

export default function Faq() {
  return (
    <div id="faq" className="faq text-white lg:min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <h3
          data-aos="fade-up"
          data-aos-delay=""
          className="text-2xl text-center px-4"
        >
          FREQUENTLY ASKED QUESTIONS (FAQ)
        </h3>
        <div
          data-aos="flip-right"
          data-aos-delay=""
          className="lg:flex items-center lg:mb-20"
        >
          {/* <div className="h-full w-full object-contain px-12 mt-8 md:w-2/3  mx-auto  lg:w-1/2 lg:px-28 ">
            <Image
              src={bigdog}
              height={100}
              width={100}
              alt="icon"
              className="object-contain  h-full w-full"
            />
          </div> */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-10 lg:w- "
          >
            <FaqCard
              title="What inspired the creation of BM2K?"
              text="BM2K was inspired by a heartfelt interaction with Billy Markus, the creator of Dogecoin. The token serves as a unique and genuine tribute to express appreciation for his contributions to the crypto community.
"
            />
            <FaqCard
              title="Why is the maximum supply of BM2K set at 42,000,000 tokens?
"
              text="I.D.K.
"
            />
            {/* <FaqCard
              title="How can I actively participate in the governance of BM2K?
"
              text="
As a token holder, you can actively participate in governance by voting on proposals related to community initiatives and the future development of BM2K. Your voice matters, and you play a role in shaping the token's direction.
"
            /> */}
            <FaqCard
              title="What will the price of BM2K be in the future?"
              text="¯\(ツ)/¯"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
