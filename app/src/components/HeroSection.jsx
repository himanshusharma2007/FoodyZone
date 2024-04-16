import React from "react";
import HeroCard from "./HeroCard";

function HeroSection({ Data }) {
    if (!Data || Data.length === 0) {
      return <div>Sorry! Food Not Found </div>;
    }
  const name=Data[0]?.name;

  return (
    <div className="HeroSec -mt-[1vh] text-xl min-h-[81vh] h-auto xl:h-[81vh] bg-cover bg-no-repeat flex justify-center lg:items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10   h-full place-content-center   lg:place-content-start lg:w-fit lg:h-full pt-8  ">
        {Data
          ? Data.map((details, index) => {
              return <HeroCard key={index} Details={details} />;
            })
          : "not found"}
      </div>
    </div>
  );
}

export default HeroSection;
