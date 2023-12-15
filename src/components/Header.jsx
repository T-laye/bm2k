import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/images/logo.jpg";
import x from "../../public/images/logos_twitter.svg";
import red from "../../public/images/logos_reddit-icon.svg";
import tel from "../../public/images/logos_telegram.svg";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#7529A505] backdrop-blur-sm z-10 pb-5">
      <div className="flex container mx-auto justify-between px-6 pt-6 relative">
        <Link href="/">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={logo} height={100} width={100} alt="logo" />
          </div>
        </Link>

        <nav className="hidden lg:flex justify-between items-center w-2/3 text-lg font-semibold  tex-[#f5f5f5]">
          <ul className="mt-8 flex flex-col space-y-2 lg:flex-row lg:items-center lg:mt-0 lg:space-x-6 lg:space-y-0">
            <li className="hover:text-primary duration-300">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="/#about">About us</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link
                target="_blank"
                href="https://coinranking.com/coin/2rgs0X7nM+bm2kdrc-bm2k"
              >
                Chart
              </Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className="hover:text-primary duration-300">
              <Link target="_blank" href="https://twitter.com/_electronicCash">
                Much News
              </Link>
            </li>
          </ul>

          <div className="flex space-x-4">
            <Link target="_blank" href="https://twitter.com/bm2kdrc20">
              <div className="h-7 w-7 ">
                <Image src={x} height={100} width={100} alt="logo" />
              </div>
            </Link>

            <Link target="_blank" href="https://t.me/bm2kdrc20">
              <div className="h-7 w-7 ">
                <Image src={tel} height={100} width={100} alt="logo" />
              </div>
            </Link>
          </div>
        </nav>

        {/* mobile nav */}
        <nav
          className={`${
            open
              ? "translate-x-0 duration-300"
              : "translate-x-[200%] duration-300"
          } lg:hidden absolute text-lg right-0 duration-300 rounded-2xl nav-shadow w-2/3 min-h-[50vh] bg-white px-2 pb-4`}
        >
          <div className="my-5 flex space-x-5 px-2 text-2xl">
            <div onClick={() => setOpen(!open)}>X</div>
            <div>Menu</div>
          </div>
          <ul className=" flex flex-col space-y-2 lg:flex-row lg:items-center lg:mt-0 lg:space-x-6 lg:space-y-0">
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link href="#about">About us</Link>
            </li>
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link
                target="_blank"
                href="https://coinranking.com/coin/2rgs0X7nM+bm2kdrc-bm2k"
              >
                Chart
              </Link>
            </li>
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className="hover:text-primary border-b border-b-[#333333] mb-2 pb-2 px-2 duration-300">
              <Link target="_blank" href="https://twitter.com/_electronicCash">
                Much News
              </Link>
            </li>
          </ul>

          <div className=" mt-5 px-3">
            <Link target="_blank" href="https://twitter.com/bm2kdrc20">
              <div className="h-7 w-7 mb-4">
                <Image src={x} height={100} width={100} alt="logo" />
              </div>
            </Link>

            <Link target="_blank" href="https://t.me/bm2kdrc20">
              <div className="h-7 w-7 ">
                <Image src={tel} height={100} width={100} alt="logo" />
              </div>
            </Link>
          </div>
        </nav>

        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <IoMdMenu size={32} className="text-primary" />
        </div>
      </div>
    </div>
  );
}
