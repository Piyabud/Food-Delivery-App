import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className=" w-full text-[--Primary] overflow-x-scroll">
      {/* Wrapper */}
      <div className="w-max flex ">
        {/* SINGLE ITEM  */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="group w-screen h-[60vh] flex flex-col items-center justify-around p-4 
            hover:bg-[--secondary] transition-all duration-300
            md:w-[50vw] xl:w-[33vw] xl:h-[90vh] 
           "
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div
                className="relative flex-1 w-full my-4
              group-hover:rotate-[5deg] transition-all duration-500
              lg:my-2 xl:my-0"
              >
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold ">${item.price}</span>
              <button className="bg-[--Primary] text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
