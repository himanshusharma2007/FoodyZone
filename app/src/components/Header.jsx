import logo from "../images/Foody Zone.svg";
import React, { useMemo } from "react";
import InputField from "./inputFeild";

const Header = React.memo(({ OnChange, InputData, Filtercheck, inputRef }) => {
  return (
    <div className="relative bg-gray-700 w-full h-[20vh] flex flex-col  justify-center items-center m-0 p-0">
      <div className="first flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:justify-between w-full  lg:mb-5 ">
        <img src={logo} alt="" className="w-[200px] h-[30px] lg:ml-64" />
        <InputField InputData={InputData} OnChange={OnChange} />
      </div>
      <div className="second absolute bottom-3 lg:bottom-4">
        <ul className="flex flex-row space-x-3">
          <li
            onClick={() => {
              Filtercheck("all");
            }}
            className="filter cursor-pointer   pl-3 pr-3 bg-red-500 text-xl text-white "
          >
            All
          </li>
          <li
            onClick={() => {
              Filtercheck("Breakfast");
            }}
            className="filter cursor-pointer   pl-3 pr-3 bg-red-500 text-xl text-white "
          >
            Breakfast
          </li>
          <li
            onClick={() => {
              Filtercheck("Lunch");
            }}
            className="filter cursor-pointer   pl-3 pr-3 bg-red-500 text-xl text-white "
          >
            Lunch
          </li>
          <li
            onClick={() => {
              Filtercheck("Dinner");
            }}
            className="filter cursor-pointer   pl-3 pr-3 bg-red-500 text-xl text-white "
          >
            Dinner
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Header;
