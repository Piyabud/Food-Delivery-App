"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-07-25");

function CountDown() {
  return (
    <div>
      <Countdown date={endingDate} />
    </div>
  );
}

export default CountDown;
