import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500 ">
      {pizzas.map((product, index) => (
        <Link
          key={index}
          href={`/product/${product.id}`}
          className="group w-full h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between odd:bg-orange-50 relative overflow-hidden"
        >
          {/* IMG-CON */}
          {product.img && (
            <div className="relative h-[80%]">
              <Image src={product.img} alt="" fill className="object-contain hover:scale-[1.05] transition-all duration-300" />
            </div>
          )}
          {/* TEXT-CON */}
          <div className="flex items-center justify-between font-bold relative z-10">
            <h1 className="text-2xl uppercase p-2">{product.title}</h1>
            <h2 className="group-hover:hidden text-xl">${product.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
          {/* Shine effect */}
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
