import React from "react";
import { BASE_URL } from "../App";

function HeroCard({ Details }) {
  return (
    <div className="card text-white flex flex-row bg-pink-400 w-[400px] h-[200px] justify-center items-end ">
      <div className="left w-full  h-full flex justify-center items-center">
        <img className="w-3/4 h-3/4" src={BASE_URL + Details.image} alt="" />
      </div>
      <div className="right p-3 space-y-3 relative h-full w-full flex flex-col justify-start pt-4">
        <div className="title">{Details.name}</div>
        <div className="text-sm ">{Details.text}</div>
        <div className="text-sm ">{Details.type}</div>

        <div className="price  right-3 bottom-3 bg-red-500 pl-2 pr-2  w-[100px]">{"$"+Details.price + ".00"}</div>
      </div>
    </div>
  );
}

export default HeroCard;
