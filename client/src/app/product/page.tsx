import React from "react";
import { pizzas, singleProduct } from "@/data";
import Image from "next/image";
import Link from "next/link";

function SingerProductPage() {
  return (
    <div className=" flex flex-wrap text-red-500">
      {pizzas.map((item, index) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 
          sm:w-1/2 lg:w-1/3 p-4 
          flex flex-col justify-between group odd:bg-pink-50"
          href={`/product/${item.id}`}
          key={index}
        >
          {/* IMG-CON */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain group-hover:scale-[1.025] transition-all duration-300" />
            </div>
          )}
          {/* TEXT-CON */}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SingerProductPage;
