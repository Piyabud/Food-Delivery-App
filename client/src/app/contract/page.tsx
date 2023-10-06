import React from "react";
import Image from "next/image";
import Link from "next/link";

function ContractPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/IMG_2378.JPG" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <div className="user-info">
            <h1 className=" text-[48px] font-extrabold text-red-500 mb-8">
              My Intro
            </h1>
            <p className="mb-8 indent-8">
              My name is Piyabud Tapang (M), I have 5 years of experience as a
              3D animator, and I am currently transitioning to software
              development. I am proficient in HTML, CSS, JavaScript, Node.js,
              Express.js, MongoDB, PostgreSQL, Supabase, Git, and Cypress for
              testing programs. With a proven ability to perform under pressure,
              I excel at delivering results within tight deadlines.
            </p>
            <div className="">
              <table className="">
                <tbody>
                  <tr>
                    <td className="">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                    </td>
                    <td className="w-[60px] font-bold">Name</td>
                    <td className="w-[50px]">:</td>
                    <td className="w-[50px]">Piyabud Tapang</td>
                  </tr>
                  <tr>
                    <td>{/* <FontAwesomeIcon icon={faPhoneFlip} /> */}</td>
                    <td className="w-[60px] font-bold">Phone</td>
                    <td className="w-[60px] ">:</td>
                    <td className="w-[60px]">(+66) 934-925-445</td>
                  </tr>
                  <tr>
                    <td>{/* <FontAwesomeIcon icon={faEnvelope} /> */}</td>
                    <td className="w-[60px] font-bold">Email</td>
                    <td className="w-[60px] ">:</td>
                    <td className="w-[60px] ">t.piyabud@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractPage;
