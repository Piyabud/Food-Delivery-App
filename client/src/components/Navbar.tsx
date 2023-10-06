import Menu from "./Menu";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div
      className="
      h-12 text-[--Primary] p-4 
      flex items-center justify-between 
      border-b-2 border-[--Primary] uppercase 
      md:h-24 lg:px-9 xl:px-40
    "
    >
      {/* LEFT LINK */}
      <div className="hidden md:flex gap-6 flex-1 font-bold">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {/* LoGO */}
      <div className="text-3xl  font-extrabold flex-1 md:text-center">
        <Link href="/">Pizza Heart</Link>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Link */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div
          className="
            md:absolute top-3 r-2 lg:static lg:py-2 lg:px-4
            flex items-center gap-2 
            cursor-pointer 
          bg-orange-300 px-3 rounded-md"
        >
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="font-medium text-md">1209</span>
        </div>
        {!user ? (
          <Link
            href={"/login"}
            className="font-semibold border-b-2 border-[--Primary] p-2  text-[--Primary] ml-4"
          >
            Login
          </Link>
        ) : (
          <Link
            href={"/orders"}
            className="font-semibold border-b-2 border-[--Primary] p-2  text-[--Primary] ml-4"
          >
            Orders
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
