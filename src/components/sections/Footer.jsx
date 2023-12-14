import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.jpg";

export default function Footer() {
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image src={logo} height={100} width={100} alt="logo" />
            </div>
          </Link>
          <span className="">BM2K</span>
        </div>

        <nav>
          <ul className="mt-8 flex flex-col space-y-2">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Much News</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>

        <div className="pt-2 pb-4 border-t mt-8 flex items-center justify-center space-x-4">
          <span className="text-2xl"> &copy; </span>
          <span> 2023 BM2K. </span>
          <span> All rights reserved </span>
        </div>
      </div>
    </div>
  );
}
