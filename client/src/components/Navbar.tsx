import Menu from "./Menu";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2  border-b-red-500 uppercase">
      {/* LoGO */}
      <div>
        <Link href="/">Pizza Heart</Link>
      </div>
      {/* Mobile */}
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
