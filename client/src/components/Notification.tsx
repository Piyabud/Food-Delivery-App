import React from "react";

function Notification() {
  return (
    <div  
      className="
      h-12 
      bg-red-500 text-white text-sm
      flex justify-center items-center 
      md:text-base 
      cursor-pointer"
    >
      Free delivery for all orders over $50. Order your food now!
    </div>
  );
}

export default Notification;
