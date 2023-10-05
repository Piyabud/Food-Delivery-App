"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },

  { id: 3, title: "Contact", url: "/" },
];

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const user = false;
  return (
    <div>
      <Image
        src={openMenu ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpenMenu(!openMenu)}
        className="cursor-pointer"
      />
      {openMenu && (
        <div
          className="
        bg-[--Primary] text-white 
        absolute top-24 left-0  
        h-[calc(100vh-6rem)] w-full 
        flex flex-col gap-8 items-center justify-center 
        text-3xl z-10"
        >
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpenMenu(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "login"}
            onClick={() => setOpenMenu(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setOpenMenu(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
