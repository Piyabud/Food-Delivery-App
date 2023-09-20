"use client";
import React, { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  size?: {
    title: string;
    additionalPrice: number;
  }[];
};

function Price({ price, id, size }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (size ? price + size[selected].additionalPrice : price)
    );
  }, [quantity, size, selected, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* size CON*/}
      <div className="flex gap-4 mb-6 ">
        {size?.map((size, index) => (
          <button
            key={index}
            className="px-4 py-2 ring-2 ring-red-300 rounded-xl"
            style={{
              background: selected === index ? "#DC2626" : "white",
              color: selected === index ? "white" : "#EF4444",
            }}
            onClick={() => setSelected(index)}
          >
            {size.title}
          </button>
        ))}
      </div>
      {/* QUANTITY / ADD BUTTON CON */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="w-full p-3 flex justify-between items-center ring-1 ring-red-500 ">
          <span className="">Quantity</span>
          <div className="flex gap-4 items-center font-semibold">
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >{`-`}</button>
            <span className="">{quantity}</span>
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 1))}
            >{`+`}</button>
          </div>
        </div>
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 ">
          {" "}
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Price;
