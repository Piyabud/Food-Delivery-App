"use client";

import { useParams } from "next/navigation";
import Price from "@/components/Price";
import { pizzas } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  const params = useParams();
  const paramID = params.id;
  const pizzaIndex = Number(paramID) - 1;

  return (
    <div
      className="p-2 lg:px-20 xl:px-40 h-screen 
    flex flex-col justify-around text-[--Primary] 
    md:flex-row md:gap-24 md:items-center
    "
    >
      {/* IMAGE CONTAINER */}
      {pizzas[pizzaIndex].img && (
        <div className="relative w-full h-1/2 mb-6 md:h-[100%]">
          <Image
            src={`${pizzas[pizzaIndex].img}`}
            alt=""
            className="object-contain"
            fill
            loading="lazy"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div
        className="h-1/2 flex flex-col gap-4 
      md:h-[70%] md:justify-center md:gap-6 xl:gap-8"
      >
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {pizzas[pizzaIndex].title}
        </h1>
        <p>{pizzas[pizzaIndex].desc}</p>
        <Price
          price={pizzas[pizzaIndex].price}
          id={pizzas[pizzaIndex].id}
          size={pizzas[pizzaIndex].size}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
