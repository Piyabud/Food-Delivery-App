import React from "react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  img?: string;
  price: number;
  size?: {
    title: string;
    additionalPrice: number;
  }[];
};

function OrderItems({ id, title, img, price, size }: Props) {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between border-2 border-green-400 ">
        <Image
          src="/temporary/p1.png"
          alt=""
          width={120}
          height={120}
          className="md:scale-[1.2]"
        />
        <div className="">
          <h1 className="uppercase text-xl font-bold">sicilian</h1>
          <span>Large</span>
        </div>
        <h2 className="font-bold">$79.90</h2>
        <Image
          src="/delete.svg"
          alt=""
          width={20}
          height={20}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}

export default OrderItems;
