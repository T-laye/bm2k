import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex container mx-auto justify-between px-6 pt-6">
        <Link href="/">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={logo} height={100} width={100} alt="logo" />
          </div>
        </Link>
        <div>
          <IoMdMenu size={32} className="text-primary" />
        </div>
      </div>
    </div>
  );
}
