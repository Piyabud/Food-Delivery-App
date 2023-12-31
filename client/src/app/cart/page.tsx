import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[--Primary] lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-full p-6 gap-8 flex flex-col justify-center  overflow-scroll md:gap-10 lg:gap-16 lg:h-full lg:w-2/3 lg:p-8 2xl:w-[75vw] lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between ">
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
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between ">
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
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between ">
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
      {/* PAYMENT CONTAINER */}
      <div className="h-1/3 p-4 bg-[--secondary] flex flex-col gap-4 justify-center lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20  2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between ">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-[--Primary] text-white p-[12px] rounded-md w-full self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
