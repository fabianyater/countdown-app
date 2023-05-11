"use client";

import { useEffect, useState } from "react";
import { Countdown } from "./Countdown";

export const Cards = () => {
  const [data, setData] = useState()

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")))
  }, [])

  return (
    data &&
    data.slice().reverse().map((item, index) => (
      <div
        key={index}
        className="tremor-Card-root relative w-full h-56 text-left ring-1 bg-[#1C1C1C] shadow border-blue-500 ring-gray-200 p-6 rounded-lg flex-1"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h2 className="text-2xl font-bold text-center">{item.name}</h2>
          <Countdown date={item.calendar} />
        </div>
      </div>
    ))
  );
};
