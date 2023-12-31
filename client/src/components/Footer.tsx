import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className="
    h-12 text-sm border-t-2 border-[--Primary]
    md:h-24 p-4 md:text-sm lg:px-20 xl:px-40
  text-[--Primary] 
    flex items-center justify-between"
    >
      <Link
        href={"/"}
        className="font-semibold text-sm md:font-bold md:text-xl"
      >
        PIZZA HEART{" "}
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default Footer;
